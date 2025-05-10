import { NavLink } from "react-router";
import * as React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-heading font-semibold text-primary">
              Portfolio
            </span>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
            <NavLink
              to="/portfolio"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Contact
            </NavLink>
          </div>
          <div className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
