import { Container } from '@material-ui/core';

export default function ContainerElem({ children }) {
  return <Container fixed>{children}</Container>;
}
