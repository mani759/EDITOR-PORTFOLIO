export default function ResultCard({ result }) {
  return <article>{result?.title || "Result"}</article>;
}
