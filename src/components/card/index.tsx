import { StyledCard } from "./styles";
import { CardProps } from "./types";

export function Card({ repoName }: CardProps) {
  return (
    <StyledCard>
      <span className="repo_name">{repoName}</span>
    </StyledCard>
  );
}
