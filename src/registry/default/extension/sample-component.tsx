// src/registry/default/extension/sample-component.tsx

interface SampleComponentProps {
  content: string;
}

const SampleComponent = ({ content }: SampleComponentProps) => {
  return <div>{content ?? "Hello World!"}</div>;
};

export default SampleComponent;