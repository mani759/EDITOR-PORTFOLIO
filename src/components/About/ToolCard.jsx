export default function ToolCard({ tool }) {
  return <article>{tool?.name || "Tool"}</article>;
}
