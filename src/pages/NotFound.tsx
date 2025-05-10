import * as React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-4">
        <h1 className="text-6xl md:text-7xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg">
          <Link to="/portfolio">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
