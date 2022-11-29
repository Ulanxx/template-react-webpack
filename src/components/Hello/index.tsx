export interface HelloProps {
  name: string;
}

export function Hello({ name }: HelloProps) {
  return <div>Hello {name}</div>;
}
