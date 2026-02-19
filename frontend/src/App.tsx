import { useState } from "react";

interface ConversionResponse {
  converted?: number;
  error?: string;
}

function App() {
  const [base, setBase] = useState<string>("USD");
  const [target, setTarget] = useState<string>("EUR");
  const [amount, setAmount] = useState<number>(1);
  const [result, setResult] = useState<string | number>("");

  const convert = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ base, target, amount }),
      });
      const data: ConversionResponse = await res.json();
      setResult(data.converted ?? data.error ?? "Unknown error");
    } catch (err) {
      setResult("API error");
    }
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <input
        value={base}
        onChange={(e) => setBase(e.target.value.toUpperCase())}
        placeholder="Base currency"
      />
      <input
        value={target}
        onChange={(e) => setTarget(e.target.value.toUpperCase())}
        placeholder="Target currency"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        placeholder="Amount"
      />
      <button onClick={convert}>Convert</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
