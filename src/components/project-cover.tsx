import Image from "next/image";
import type { Project } from "@/content/projects";
import { ProjectVisual } from "./visuals";

/** Первый разрешённый скриншот автоматически заменяет временную иллюстрацию. */
export function ProjectCover({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const cover = project.images[0];
  if (!cover) return <ProjectVisual kind={project.visual} large={large} />;
  return (
    <div
      className={`project-visual visual-screenshot${large ? " visual-large" : ""}`}
    >
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        sizes={
          large
            ? "(max-width: 760px) 100vw, 1280px"
            : "(max-width: 760px) 100vw, 65vw"
        }
      />
    </div>
  );
}
