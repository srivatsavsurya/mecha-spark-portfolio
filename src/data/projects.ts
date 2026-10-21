import { Bot, Boxes, Cpu, ScanLine, Wallet, type LucideIcon } from "lucide-react";
import qrImage from "@/assets/project-qr.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  icon: LucideIcon;
  color: string;
  image?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "autodrive",
    title: "AutoDrive",
    category: "Automotive / CAN bus",
    description:
      "A CAN bus sniffer for exploring a car's in-vehicle network: an Arduino with an MCP2515 module streams bus traffic over serial to a PyQt5 desktop app.",
    fullDescription:
      "The Arduino firmware bridges the CAN bus and serial at 250000 baud, and can generate random packets for bench testing without a car. The desktop app scans serial ports, shows live traffic, filters and labels IDs, hides packets that stop changing, saves and replays sessions as CSV, and sends frames back onto the bus. Based on Adam Varga's open-source canDrive (MIT).",
    technologies: ["python", "pyqt5", "arduino", "mcp2515", "can bus", "serial"],
    features: [
      "live CAN traffic view with ID filtering",
      "label IDs and hide stale packets",
      "save and replay sessions as CSV",
      "transmit frames from the GUI",
      "random-packet mode for bench testing",
    ],
    icon: Cpu,
    color: "bg-purple-500",
    github: "https://github.com/srivatsavsurya/AutoDrive",
  },
  {
    id: "private-ledger",
    title: "The Private Ledger",
    category: "Mobile / Fintech",
    description:
      "An Android app that turns bank and UPI SMS and payment notifications into a categorized personal ledger, stored on the device.",
    fullDescription:
      "Incoming bank and UPI SMS and payment notifications are parsed on the device for amount, account, merchant and UPI reference, then stored locally. The app has a transaction editor, categories, balance, cash-flow and category charts, and optional AI spending insights through OpenRouter using the user's own API key.",
    technologies: ["react native", "expo", "typescript", "android", "asyncstorage", "openrouter"],
    features: [
      "automatic capture from SMS and notifications",
      "on-device parsing and storage",
      "editable, categorized ledger",
      "cash-flow and category analytics",
      "optional LLM insights with your own key",
    ],
    icon: Wallet,
    color: "bg-green-500",
    github: "https://github.com/srivatsavsurya/penny-parse",
  },
  {
    id: "qr-detect-decode",
    title: "QR Detect & Decode",
    category: "Computer Vision",
    description:
      "Detects QR codes in scanned documents with a YOLOv8 model, decodes them with pyzbar and outputs the results as JSON.",
    fullDescription:
      "Built for batches of PDF documents: pages are converted to enhanced high-resolution images, a YOLOv8 model trained to find QR codes locates each one, and the cropped regions are decoded with pyzbar into JSON with the data and bounding box. An OpenCV contour-based detector is included as a model-free alternative.",
    technologies: ["python", "yolov8", "opencv", "pyzbar", "pdf2image"],
    features: [
      "YOLOv8 QR code detector",
      "PDF-to-image batch conversion",
      "JSON output with bounding boxes",
      "OpenCV contour fallback without a model",
    ],
    icon: ScanLine,
    color: "bg-blue-500",
    image: qrImage,
    github: "https://github.com/srivatsavsurya/QR_Detect_Decode",
  },
  {
    id: "mujoco-notebooks",
    title: "MuJoCo Notebooks",
    category: "Robotics Simulation",
    description:
      "Colab notebooks working through Google DeepMind's MuJoCo physics engine for robotics simulation.",
    fullDescription:
      "A hands-on walkthrough of MuJoCo: building models in MJCF, mjModel and mjData, rendering and simulation, degrees of freedom, chaotic pendulum timing and accuracy, contacts and friction, tendons, actuators and sensors, and advanced rendering.",
    technologies: ["python", "mujoco", "google colab", "physics simulation"],
    features: [
      "MJCF model building",
      "rendering and simulation loops",
      "contacts, friction and tendons",
      "actuators and sensors",
    ],
    icon: Boxes,
    color: "bg-orange-500",
    github: "https://github.com/srivatsavsurya/colabs",
  },
  {
    id: "robodk-simulation",
    title: "RoboDK Simulation",
    category: "Industrial Robotics",
    description:
      "High-precision robotic simulations for Yaskawa robots with automated programming workflows.",
    fullDescription:
      "Work from my robotic simulation internship at alfaTKG (Dec 2022 – Aug 2023). Professional work, so the code isn't public.",
    technologies: ["robodk", "yaskawa", "robot simulation", "industrial automation"],
    features: [
      "high-precision RoboDK simulations for Yaskawa robots, improving deployment accuracy",
      "automated robot programming workflows, cutting process time by 60%",
      "simulation frameworks for industrial automation systems",
    ],
    icon: Bot,
    color: "bg-red-500",
  },
];
