import { useState } from "react";

const api = (path: string, options?: RequestInit) =>
  fetch(`${import.meta.env.VITE_API_URL}${path}`, options);

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
      const res = await api("/convert", {
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
      <label>Base currency:</label>
      <input
        value={base}
        onChange={(e) => setBase(e.target.value.toUpperCase())}
        placeholder="Base currency"
      />
      <label>Target currency:</label>
      <input
        value={target}
        onChange={(e) => setTarget(e.target.value.toUpperCase())}
        placeholder="Target currency"
      />
      <label>Amount:</label>
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
