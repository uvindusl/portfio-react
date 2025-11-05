import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import App from "./App";
import "@testing-library/jest-dom";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  // Test 1: Component Rendering
  describe("Component Rendering", () => {
    it("renders the main app without crashing", () => {
      expect(screen.getByRole("main")).toBeInTheDocument();
    });

    it("renders NavBar component", () => {
      const navbar =
        document.querySelector("nav") ||
        document.querySelector('[class*="nav"]');
      expect(navbar).toBeInTheDocument();
    });

    it("renders Hero section", () => {
      const heroSection = screen.getByRole("main");
      expect(heroSection).toHaveClass("hero-section");
    });

    it("renders Footer component", () => {
      const footer = document.getElementById("footer");
      expect(footer).toBeInTheDocument();
    });
  });

  // Test 2: Tech Stack Section
  describe("Tech Stack Section", () => {
    it("displays Tech Stack section title", () => {
      expect(screen.getByText("Tech Stack")).toBeInTheDocument();
    });

    it("renders programming language icons", () => {
      const techStackSection = document.querySelector(".languages-section");
      expect(techStackSection).toBeInTheDocument();

      // Check for language images by alt text instead
      expect(screen.getByAltText("Python")).toBeInTheDocument();
      expect(screen.getByAltText("Java")).toBeInTheDocument();
      expect(screen.getByAltText("JavaScript")).toBeInTheDocument();
      expect(screen.getByAltText("React")).toBeInTheDocument();
    });

    it("renders multiple programming languages", () => {
      const languageBoxes = document.querySelectorAll(".language-box");
      expect(languageBoxes.length).toBeGreaterThanOrEqual(10);
    });
  });

  // Test 3: Education Section
  describe("Education Section", () => {
    it("renders Education section with correct id", () => {
      const educationSection = document.getElementById("education");
      expect(educationSection).toBeInTheDocument();
    });

    it("displays Education section title", () => {
      expect(screen.getByText("Eduction")).toBeInTheDocument(); // Note: typo in original
    });

    it("renders all education entries", () => {
      expect(
        screen.getByText(/BSc \(Hons\) Software Engineering/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Certificate Course In Software Engineering/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/English Diploma/i)).toBeInTheDocument();
      expect(screen.getByText(/GCE Ordinary Level/i)).toBeInTheDocument();
    });

    it("displays education dates correctly", () => {
      expect(screen.getByText("2023 - Present")).toBeInTheDocument();
      // Use getAllByText for duplicate dates
      const dates2023 = screen.getAllByText("2023");
      expect(dates2023.length).toBeGreaterThan(0);
    });
  });

  // Test 4: Projects Section
  describe("Projects Section", () => {
    it("renders Projects section with correct id", () => {
      const worksSection = document.getElementById("works");
      expect(worksSection).toBeInTheDocument();
    });

    it("displays Projects section title", () => {
      expect(screen.getByText("My Projects")).toBeInTheDocument();
    });

    it("renders initial visible projects", () => {
      expect(
        screen.getByText("Voice Assitant")
      ).toBeInTheDocument();
      expect(screen.getByText("GitHub AI Assitant Bot")).toBeInTheDocument();
      expect(
        screen.getByText("Science More - Android Mobile Application")
      ).toBeInTheDocument();
      expect(screen.getByText("Smart Helmet With IOT")).toBeInTheDocument();
    });

    it('initially shows "Show More" button', () => {
      const button = screen.getByRole("button", { name: /show more/i });
      expect(button).toBeInTheDocument();
      expect(screen.getByText("Show More")).toBeInTheDocument();
    });
  });

  // Test 5: Show More/Hide Functionality
  describe("Show More/Hide Button Functionality", () => {
    it('toggles visibility when "Show More" button is clicked', () => {
      const button = screen.getByRole("button", { name: /show more/i });

      // Initially hidden projects should not be visible
      expect(
        screen.queryByText("Train Ticket Reservation System")
      ).not.toBeInTheDocument();
      expect(screen.queryByText("To Do Application")).not.toBeInTheDocument();

      // Click Show More
      fireEvent.click(button);

      // Hidden projects should now be visible
      expect(
        screen.getByText("Train Ticket Reservation System")
      ).toBeInTheDocument();
      expect(screen.getByText("To Do Application")).toBeInTheDocument();
    });

    it('changes button text from "Show More" to "Hide"', () => {
      const button = screen.getByRole("button", { name: /show more/i });

      expect(screen.getByText("Show More")).toBeInTheDocument();

      fireEvent.click(button);

      expect(screen.getByText("Hide")).toBeInTheDocument();
      expect(screen.queryByText("Show More")).not.toBeInTheDocument();
    });

    it('hides projects when "Hide" button is clicked', () => {
      const button = screen.getByRole("button", { name: /show more/i });

      // Click to show
      fireEvent.click(button);
      expect(
        screen.getByText("Train Ticket Reservation System")
      ).toBeInTheDocument();

      // Click to hide
      const hideButton = screen.getByRole("button", { name: /hide/i });
      fireEvent.click(hideButton);

      expect(
        screen.queryByText("Train Ticket Reservation System")
      ).not.toBeInTheDocument();
    });
  });

  // Test 6: Navigation Links
  describe("Navigation", () => {
    it("renders navigation with correct anchor links", () => {
      // Check if sections have correct IDs for navigation
      expect(document.getElementById("home")).toBeInTheDocument();
      expect(document.getElementById("education")).toBeInTheDocument();
      expect(document.getElementById("works")).toBeInTheDocument();
      expect(document.getElementById("footer")).toBeInTheDocument();
    });

    it("renders all navigation links", () => {
      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Education")).toBeInTheDocument();
      expect(screen.getByText("Works")).toBeInTheDocument();
      expect(screen.getByText("Contact")).toBeInTheDocument();
    });
  });

  // Test 7: All Sections Present
  describe("All Major Sections", () => {
    it("renders all major sections of the portfolio", () => {
      const sections = [
        document.querySelector(".hero-section"),
        document.querySelector(".languages-section"),
        document.querySelector(".timeline"),
        document.querySelector(".works-section"),
        document.getElementById("footer"),
      ];

      sections.forEach((section) => {
        expect(section).toBeInTheDocument();
      });
    });
  });

  // Test 8: Hidden Projects Content
  describe("Hidden Projects Content", () => {
    it("renders hidden projects when expanded", () => {
      const button = screen.getByRole("button", { name: /show more/i });
      fireEvent.click(button);

      // Test projects that appear only once
      expect(
        screen.getByText(/Microservice-based food ordering system/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/Automated Cat Care Robot/i)).toBeInTheDocument();
      expect(screen.getByText(/Student Course Tracker/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Intelligent Energy Optimization System/i)
      ).toBeInTheDocument();

      // For projects where title might appear in description too
      const trainElements = screen.getAllByText(/Train Ticket/i);
      expect(trainElements.length).toBeGreaterThanOrEqual(1);
    });

    it("shows additional projects when expanded", () => {
      const button = screen.getByRole("button", { name: /show more/i });

      // Check that hidden project is not visible initially
      expect(
        screen.queryByText("Automated Cat Care Robot")
      ).not.toBeInTheDocument();

      fireEvent.click(button);

      // Check that hidden projects are now visible
      expect(screen.getByText("Automated Cat Care Robot")).toBeInTheDocument();
      expect(screen.getByText(/Student Course Tracker/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Intelligent Energy Optimization System/i)
      ).toBeInTheDocument();
    });
  });

  // Test 9: State Management
  describe("State Management", () => {
    it("manages visibility state correctly", () => {
      const button = screen.getByRole("button", { name: /show more/i });

      // Initial state - isVisible is false
      expect(
        screen.queryByText(/Automated Cat Care Robot/i)
      ).not.toBeInTheDocument();

      // Toggle to true
      fireEvent.click(button);
      expect(screen.getByText(/Automated Cat Care Robot/i)).toBeInTheDocument();

      // Toggle back to false
      const hideButton = screen.getByRole("button", { name: /hide/i });
      fireEvent.click(hideButton);
      expect(
        screen.queryByText(/Automated Cat Care Robot/i)
      ).not.toBeInTheDocument();
    });
  });
});
