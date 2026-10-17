"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, projectStatus } from "@/content/projects";
import { ProjectCover } from "./project-cover";
const filters = [
  { value: "all", label: "Все проекты" },
  { value: "commercial", label: "Коммерческие" },
  { value: "demo", label: "Демонстрационные" },
] as const;
export function ProjectGrid() {
  const [filter, setFilter] = useState<string>("all");
  const visible = projects.filter(
    (p) => filter === "all" || p.status === filter,
  );
  return (
    <>
      <div
        className="project-filters"
        role="group"
        aria-label="Фильтр проектов"
      >
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
            <span>
              {f.value === "all"
                ? projects.length
                : projects.filter((p) => p.status === f.value).length}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        Показано проектов: {visible.length}
      </p>
      <div className="projects-grid">
        {visible.map((project) => (
          <Link
            className={`project-card project-${project.visual}`}
            key={project.slug}
            href={`/projects/${project.slug}`}
          >
            <ProjectCover project={project} />
            <div className="project-card-info">
              <div>
                <div className="project-meta">
                  <span className={`status-dot status-${project.status}`} />
                  {projectStatus(project)}
                  <span className="meta-divider">/</span>
                  {project.category}
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <span className="round-arrow">
                <ArrowUpRight size={24} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
