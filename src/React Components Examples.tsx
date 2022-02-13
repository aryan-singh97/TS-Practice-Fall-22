import React, { ReactNode } from "react";
import "./App.css";

//
//const HeadingFC: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;

//Conventional Props
function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

function HeadingWithContent({ children }: { children: React.ReactNode }) {
  return <h1>{children}</h1>;
}

//default Props
const defualtContainerProps = {
  heading: <strong>My Heading</strong>,
};
type ContainerProps = {
  children: React.ReactNode;
} & typeof defualtContainerProps;
function Container({ heading, children }: ContainerProps): React.ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}
Container.defualtProps = defualtContainerProps;

//Functional Props
function TextWithNumber({
  header,
  children,
}: {
  header?: (num: number) => React.ReactNode;
  children: (num: number) => React.ReactNode;
}) {
  const [state, setState] = React.useState<number>(1);

  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState(state + 1)}></button>
      </div>
    </div>
  );
}

//generics
//List
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (items: ListItem) => React.ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

//Class based components
class MyContainer extends React.Component<{
  title: ReactNode;
}> {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <Heading title="Verbose"></Heading>
      <HeadingWithContent>
        <strong>Hi</strong>
      </HeadingWithContent>
      <Container heading={<h1>Container</h1>}>
        <h1>sds</h1>
      </Container>
      <TextWithNumber>{(num: number) => <div>{num}</div>}</TextWithNumber>
      <List
        items={["kack", "paul", "josh"]}
        render={(item: string) => <div>{item.toLocaleLowerCase}</div>}
      ></List>
      <MyContainer title="There yo"></MyContainer>
    </div>
  );
}

export default App;
