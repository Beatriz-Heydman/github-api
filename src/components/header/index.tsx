import { Flex } from "../flex";
import { StyledHeader } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <Flex gap="1rem" justifyContent="flex-start">
        <img src="/assets/images/github-logo-header.png" />
        <h1>Repositórios</h1>
      </Flex>
    </StyledHeader>
  );
}
