export interface NavMenuItem {
  title: string;
  href: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface NavigationCategory {
  title: string;
  href?: string;
  items?: NavMenuItem[];
}

export const MEGA_MENU_PRODUCTS: NavMenuItem[] = [
  {
    title: "Pharmacy Management",
    href: "/features#pharmacy-management",
    description: "Complete counter operations, shift handovers & cashier balancing.",
    icon: "Building2",
    badge: "Core"
  },
  {
    title: "Inventory Control",
    href: "/features#inventory",
    description: "Batch tracking, expiry alerts, low-stock warnings & purchase orders.",
    icon: "PackageCheck",
    badge: "Automated"
  },
  {
    title: "Orders & POS",
    href: "/features#orders",
    description: "Rapid counter checkout, barcode scanning & receipt printing.",
    icon: "Receipt",
  },
  {
    title: "Prescription Workflow",
    href: "/features#prescriptions",
    description: "Digital Rx intake, pharmacist verification & dispensing validation.",
    icon: "FileCheck2",
    badge: "Smart Rx"
  },
  {
    title: "Customer & Patient Records",
    href: "/features#customers",
    description: "Medication history, allergy profiles & loyalty communication.",
    icon: "Users",
  },
  {
    title: "Payments & Invoicing",
    href: "/features#payments",
    description: "Cash, cards, mobile money & health insurance claims processing.",
    icon: "CreditCard",
  },
  {
    title: "Analytics & Telemetry",
    href: "/features#analytics",
    description: "Real-time revenue, gross margin, top drugs & demand forecasting.",
    icon: "TrendingUp",
  },
  {
    title: "Delivery & Dispatch",
    href: "/features#delivery",
    description: "Rider assignments, live delivery tracking & digital proof of receipt.",
    icon: "Truck",
  },
  {
    title: "Desktop Application",
    href: "/desktop",
    description: "Blazing fast native Windows application optimized for high-speed POS.",
    icon: "Monitor",
    badge: "Win 10/11"
  },
  {
    title: "Web Platform",
    href: "/web",
    description: "Access your pharmacy remotely from any modern browser anywhere.",
    icon: "Globe",
  }
];

export const MEGA_MENU_SOLUTIONS: NavMenuItem[] = [
  {
    title: "Independent Pharmacies",
    href: "/features?type=independent",
    description: "Streamlined operations with zero overhead and instant setup.",
    icon: "Store",
  },
  {
    title: "Pharmacy Chains & Groups",
    href: "/features?type=chains",
    description: "Multi-branch inventory sync, centralized purchasing & audit logs.",
    icon: "Layers",
    badge: "Multi-Branch"
  },
  {
    title: "Hospital Dispensaries",
    href: "/features?type=dispensaries",
    description: "Inpatient/outpatient dispensing queues with strict access rules.",
    icon: "Hospital",
  },
  {
    title: "Healthcare Retailers",
    href: "/features?type=retail",
    description: "High-volume retail checkout, OTC shelf management & promotions.",
    icon: "ShoppingBag",
  }
];

export const MEGA_MENU_RESOURCES: NavMenuItem[] = [
  {
    title: "Installation Guide",
    href: "/installation",
    description: "Step-by-step instructions for Windows setup & hardware config.",
    icon: "DownloadCloud",
  },
  {
    title: "Release Notes",
    href: "/release-notes",
    description: "Check the latest features, enhancements & security updates.",
    icon: "Sparkles",
    badge: "v1.0.0"
  },
  {
    title: "Help & Documentation",
    href: "/help",
    description: "Comprehensive guides, operational FAQs & video walkthroughs.",
    icon: "HelpCircle",
  },
  {
    title: "System Status",
    href: "/help#status",
    description: "Real-time uptime status of Pharmora cloud sync and APIs.",
    icon: "Activity",
    badge: "99.99%"
  }
];

export const TRUST_TAGS = [
  "Independent Pharmacies",
  "Community Pharmacies",
  "Pharmacy Chains",
  "Health Retailers",
  "Clinics & Dispensaries",
  "Multi-Branch Groups"
];

export interface InventoryItem {
  id: string;
  name: string;
  dosage: string;
  category: string;
  batch: string;
  expiry: string;
  stock: number;
  threshold: number;
  status: "healthy" | "low" | "critical";
  price: number;
}

export const MOCK_INVENTORY: InventoryItem[] = [
  {
    id: "MED-001",
    name: "Paracetamol BP",
    dosage: "500mg (100 Tabs)",
    category: "Analgesics",
    batch: "BN-2024-884",
    expiry: "Nov 2027",
    stock: 124,
    threshold: 30,
    status: "healthy",
    price: 32.00
  },
  {
    id: "MED-002",
    name: "Amoxicillin Trihydrate",
    dosage: "500mg Caps",
    category: "Antibiotics",
    batch: "BN-2024-912",
    expiry: "Jan 2026",
    stock: 12,
    threshold: 25,
    status: "low",
    price: 45.50
  },
  {
    id: "MED-003",
    name: "Vitamin C Effervescent",
    dosage: "1000mg Orange",
    category: "Supplements",
    batch: "BN-2024-402",
    expiry: "Aug 2026",
    stock: 4,
    threshold: 15,
    status: "critical",
    price: 58.00
  },
  {
    id: "MED-004",
    name: "Metformin Hydrochloride",
    dosage: "500mg Extended",
    category: "Antidiabetic",
    batch: "BN-2024-119",
    expiry: "May 2028",
    stock: 86,
    threshold: 20,
    status: "healthy",
    price: 38.00
  },
  {
    id: "MED-005",
    name: "Omeprazole Delayed-Release",
    dosage: "20mg Caps",
    category: "Gastrointestinal",
    batch: "BN-2024-773",
    expiry: "Sep 2026",
    stock: 18,
    threshold: 20,
    status: "low",
    price: 52.00
  },
  {
    id: "MED-006",
    name: "Azithromycin",
    dosage: "500mg (3 Tabs)",
    category: "Antibiotics",
    batch: "BN-2024-340",
    expiry: "Dec 2025",
    stock: 2,
    threshold: 15,
    status: "critical",
    price: 65.00
  },
  {
    id: "MED-007",
    name: "Cetirizine Hydrochloride",
    dosage: "10mg (30 Tabs)",
    category: "Antihistamines",
    batch: "BN-2024-601",
    expiry: "Oct 2027",
    stock: 94,
    threshold: 25,
    status: "healthy",
    price: 24.50
  }
];

export interface OrderItem {
  id: string;
  orderNumber: string;
  customer: string;
  type: "Counter Walk-in" | "Prescription Refill" | "Online Delivery" | "Insurance Claim";
  itemsCount: number;
  amount: number;
  time: string;
  status: "new" | "processing" | "ready" | "out_for_delivery" | "completed";
  pharmacist: string;
}

export const MOCK_ORDERS: OrderItem[] = [
  {
    id: "ord-1",
    orderNumber: "PHM-4932",
    customer: "Kwame Mensah",
    type: "Counter Walk-in",
    itemsCount: 3,
    amount: 185.00,
    time: "3 mins ago",
    status: "new",
    pharmacist: "Dr. A. Osei"
  },
  {
    id: "ord-2",
    orderNumber: "PHM-4931",
    customer: "Akua Konadu",
    type: "Prescription Refill",
    itemsCount: 2,
    amount: 240.00,
    time: "12 mins ago",
    status: "processing",
    pharmacist: "Dr. E. Addo"
  },
  {
    id: "ord-3",
    orderNumber: "PHM-4930",
    customer: "Emmanuel Baah",
    type: "Online Delivery",
    itemsCount: 4,
    amount: 320.50,
    time: "24 mins ago",
    status: "ready",
    pharmacist: "Dr. A. Osei"
  },
  {
    id: "ord-4",
    orderNumber: "PHM-4929",
    customer: "Naa Borley",
    type: "Online Delivery",
    itemsCount: 1,
    amount: 95.00,
    time: "41 mins ago",
    status: "out_for_delivery",
    pharmacist: "Dr. K. Appiah"
  },
  {
    id: "ord-5",
    orderNumber: "PHM-4928",
    customer: "David Asante",
    type: "Insurance Claim",
    itemsCount: 5,
    amount: 460.00,
    time: "1 hour ago",
    status: "completed",
    pharmacist: "Dr. E. Addo"
  }
];

export const PRESCRIPTION_STEPS = [
  {
    step: "01",
    title: "Patient Submits Rx",
    description: "Prescription received at counter, mobile upload or digital doctor referral.",
    icon: "FileUp"
  },
  {
    step: "02",
    title: "Intake & Batch Match",
    description: "Automated scan resolves medication name, dosage strength & checks current batch stock.",
    icon: "ScanLine"
  },
  {
    step: "03",
    title: "Pharmacist Clinical Review",
    description: "Drug-drug interaction check, allergy screening, dosage validation & signature stamp.",
    icon: "Stethoscope"
  },
  {
    step: "04",
    title: "Dispense & Barcode Tag",
    description: "Pharmacy tech packs medications with thermal dosage label and safety barcodes.",
    icon: "PackageCheck"
  },
  {
    step: "05",
    title: "Split or Copay Settlement",
    description: "Instant claim verification for NHIS/Private HMOs plus cash/mobile money copay.",
    icon: "CreditCard"
  },
  {
    step: "06",
    title: "Counter Pickup / Dispatch",
    description: "Patient counseling notes provided and real-time SMS pickup or rider dispatch triggered.",
    icon: "CheckCircle2"
  }
];

export interface RolePermission {
  role: string;
  title: string;
  description: string;
  badge: string;
  permissions: {
    name: string;
    allowed: boolean;
  }[];
}

export const MOCK_ROLES: RolePermission[] = [
  {
    role: "owner",
    title: "Pharmacy Owner",
    description: "Full administrative jurisdiction across multi-branch finances, audits and settings.",
    badge: "Super Admin",
    permissions: [
      { name: "View Profit Margins & Financial Audits", allowed: true },
      { name: "Manage Multi-Branch Inventory Transfers", allowed: true },
      { name: "Authorize Drug Price Adjustments", allowed: true },
      { name: "Clinical Verification & Dispensing", allowed: true },
      { name: "Cashier Shift Close & Cash Balancing", allowed: true },
      { name: "Staff Payroll & Access Provisioning", allowed: true }
    ]
  },
  {
    role: "manager",
    title: "Branch Manager",
    description: "Day-to-day store management, supplier purchase orders and staff shift oversight.",
    badge: "Managerial",
    permissions: [
      { name: "View Profit Margins & Financial Audits", allowed: false },
      { name: "Manage Multi-Branch Inventory Transfers", allowed: true },
      { name: "Authorize Drug Price Adjustments", allowed: true },
      { name: "Clinical Verification & Dispensing", allowed: true },
      { name: "Cashier Shift Close & Cash Balancing", allowed: true },
      { name: "Staff Payroll & Access Provisioning", allowed: false }
    ]
  },
  {
    role: "pharmacist",
    title: "Licensed Pharmacist",
    description: "Clinical prescription verification, patient counseling, and controlled substances logging.",
    badge: "Clinical Lead",
    permissions: [
      { name: "View Profit Margins & Financial Audits", allowed: false },
      { name: "Manage Multi-Branch Inventory Transfers", allowed: false },
      { name: "Authorize Drug Price Adjustments", allowed: false },
      { name: "Clinical Verification & Dispensing", allowed: true },
      { name: "Cashier Shift Close & Cash Balancing", allowed: true },
      { name: "Staff Payroll & Access Provisioning", allowed: false }
    ]
  },
  {
    role: "cashier",
    title: "Counter Cashier / POS",
    description: "High-speed checkout, barcode scanning, receipt generation, and cash/card collections.",
    badge: "Sales POS",
    permissions: [
      { name: "View Profit Margins & Financial Audits", allowed: false },
      { name: "Manage Multi-Branch Inventory Transfers", allowed: false },
      { name: "Authorize Drug Price Adjustments", allowed: false },
      { name: "Clinical Verification & Dispensing", allowed: false },
      { name: "Cashier Shift Close & Cash Balancing", allowed: true },
      { name: "Staff Payroll & Access Provisioning", allowed: false }
    ]
  },
  {
    role: "inventory",
    title: "Inventory Clerk",
    description: "Stock intake, batch registration, expiry quarantine, and supplier deliveries receipt.",
    badge: "Logistics",
    permissions: [
      { name: "View Profit Margins & Financial Audits", allowed: false },
      { name: "Manage Multi-Branch Inventory Transfers", allowed: true },
      { name: "Authorize Drug Price Adjustments", allowed: false },
      { name: "Clinical Verification & Dispensing", allowed: false },
      { name: "Cashier Shift Close & Cash Balancing", allowed: false },
      { name: "Staff Payroll & Access Provisioning", allowed: false }
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Managing stock, orders, and insurance copays from one workspace has completely transformed our counter workflow. We cut patient wait times by over 45%.",
    author: "Dr. Michael Mensah, PharmD",
    role: "Superintendent Pharmacist & Owner",
    pharmacy: "Crown Community Pharmacy",
    city: "Accra",
    avatar: "MM",
    metrics: "45% faster dispensing"
  },
  {
    quote: "The Windows desktop application is blazingly fast on our POS counters, while I can review branch sales and low stock from my phone in real time.",
    author: "Grace Owusu-Ansah",
    role: "Operations Director",
    pharmacy: "MedCare Chain Group (4 Branches)",
    city: "Kumasi",
    avatar: "GO",
    metrics: "Zero stock-out surprises"
  },
  {
    quote: "Expiry tracking alone saved us thousands last quarter. The automated batch quarantine stops dispensing near-expiry medicines before it happens.",
    author: "Samuel Boateng",
    role: "Chief Pharmacist",
    pharmacy: "Apex Health Dispensary",
    city: "Takoradi",
    avatar: "SB",
    metrics: "99.8% inventory accuracy"
  }
];

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For independent pharmacies & single dispensaries getting started.",
    priceMonthly: "GH₵ 350",
    priceAnnual: "GH₵ 280",
    period: "/ branch / month",
    popular: false,
    ctaText: "Start Free Trial",
    ctaHref: "/contact?plan=starter",
    features: [
      "Full Windows Desktop & Web App access",
      "Up to 3 Staff User Accounts",
      "Real-time Inventory & Barcode POS",
      "Prescription review queue",
      "Standard Thermal Receipt Printing",
      "Daily Sales & End-of-Shift Reports",
      "Standard Email & Chat Support"
    ],
    notIncluded: [
      "Multi-Branch Central Inventory Sync",
      "Custom HMO / Insurance Claims Engine",
      "Dedicated Account Manager"
    ]
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "For busy community pharmacies and growing health retailers.",
    priceMonthly: "GH₵ 750",
    priceAnnual: "GH₵ 600",
    period: "/ branch / month",
    popular: true,
    badge: "Most Popular",
    ctaText: "Get Started with Pro",
    ctaHref: "/contact?plan=professional",
    features: [
      "Everything in Starter, plus:",
      "Unlimited Staff & Pharmacist Accounts",
      "Advanced Batch & Expiry Quarantine",
      "Automated Low-Stock Reorder Triggers",
      "Prescription Drug Interaction Alerts",
      "Integrated Mobile Money & Card POS",
      "Delivery Dispatch & SMS Notifications",
      "Multi-Register Barcode Scanning",
      "Priority 24/7 Phone & Remote Support"
    ],
    notIncluded: [
      "Custom Enterprise ERP Integrations"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For pharmacy chains, hospital networks & healthcare syndicates.",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    period: "tailored for your network",
    popular: false,
    ctaText: "Contact Sales",
    ctaHref: "/contact?plan=enterprise",
    features: [
      "Everything in Professional, plus:",
      "Multi-Branch Central Purchasing & Transfers",
      "Consolidated Group Analytics & Auditing",
      "Role-Based Permission Customization",
      "Direct Hospital EMR / HIS Integrations",
      "Custom HMO / Private Insurance Integrations",
      "Dedicated Account Manager & On-site Training",
      "Custom SLA & Guaranteed 99.99% Uptime",
      "Automated Off-site Encrypted Cloud Backups"
    ],
    notIncluded: []
  }
];

export const FAQS = [
  {
    question: "What is Pharmora?",
    answer: "Pharmora is a modern pharmacy operating platform engineered specifically for pharmacies, dispensaries, healthcare retailers, and pharmacy chains. It unifies inventory control, prescription workflows, POS checkout, customer profiles, supplier purchasing, and clinical analytics into one connected ecosystem.",
    category: "General"
  },
  {
    question: "Who can use Pharmora?",
    answer: "Pharmora is built for independent community pharmacies, large multi-branch chains, hospital outpatient dispensaries, veterinary pharmacies, and health & beauty retailers that dispense medication.",
    category: "General"
  },
  {
    question: "Is Pharmora available on desktop?",
    answer: "Yes! Pharmora provides a dedicated native Windows application (.exe) built for counter operations, offline resilience, thermal receipt printing, and high-frequency barcode scanner support.",
    category: "Desktop & Web"
  },
  {
    question: "Can I use Pharmora without downloading anything?",
    answer: "Absolutely. Pharmora Web runs in any modern browser (Chrome, Edge, Safari, Firefox). You can log in securely at app.pharmora.com to manage inventory, view reports, or dispense without installing software.",
    category: "Desktop & Web"
  },
  {
    question: "How do I install Pharmora on Windows?",
    answer: "Simply download the PharmoraSetup.exe installer from our Downloads page, double-click the file, and follow the rapid 3-step setup wizard. It automatically configures local cache and connects to your pharmacy workspace in under 2 minutes.",
    category: "Installation"
  },
  {
    question: "Can I manage multiple pharmacy branches?",
    answer: "Yes. With Pharmora's Multi-Branch suite, pharmacy owners and managers can monitor real-time sales across all locations, transfer stock between branches, and compare branch performance from a single centralized dashboard.",
    category: "Operations"
  },
  {
    question: "Can employees have different permissions?",
    answer: "Yes. Pharmora has granular Role-Based Access Controls (RBAC). You can define specific permissions for Owners, Managers, Licensed Pharmacists, Cashiers, and Inventory Clerks so staff only see what is relevant to their duties.",
    category: "Security"
  },
  {
    question: "Does Pharmora support inventory batch and expiry management?",
    answer: "Yes. Every medication batch is tracked with unique batch numbers, manufacturing dates, and expiry dates. The system flags nearing expiries and prevents dispensing quarantined or expired stock.",
    category: "Inventory"
  },
  {
    question: "Does Pharmora support prescription orders and refills?",
    answer: "Yes. Pharmacists can digitally log, verify, and fill prescriptions, check for drug interactions, record patient allergies, and notify patients via SMS when refills are due or ready for pickup.",
    category: "Prescriptions"
  },
  {
    question: "Can I manage delivery riders and orders?",
    answer: "Yes. Pharmora includes a built-in dispatch board where counter staff can assign ready medication orders to delivery riders, generate dispatch slips, and capture digital customer signatures upon delivery.",
    category: "Delivery"
  },
  {
    question: "Is my pharmacy data secure?",
    answer: "We employ strict security practices including end-to-end TLS 1.3 encryption, automatic encrypted cloud sync, role-based isolation, multi-factor authentication (MFA), and audit logging for every prescription dispensed.",
    category: "Security"
  },
  {
    question: "Will macOS and Linux support be available?",
    answer: "While Windows is our primary target for counter hardware, native macOS and Linux packages are currently in development. In the meantime, Mac and Linux users can access the full feature set via Pharmora Web.",
    category: "Desktop & Web"
  },
  {
    question: "How do I get technical support?",
    answer: "Our pharmacy support specialists are available via live chat in-app, phone, email, and remote desk assistance. Professional and Enterprise tiers receive 24/7 emergency response.",
    category: "General"
  }
];

export const SYSTEM_REQUIREMENTS = {
  os: "Windows 10 / Windows 11 (64-bit)",
  processor: "Intel Core i3 / AMD Ryzen 3 or higher (2.0 GHz+)",
  ram: "4 GB minimum (8 GB recommended for multi-lane counters)",
  storage: "500 MB free disk space for application files",
  display: "1366 x 768 minimum resolution (1080p recommended)",
  network: "Broadband internet connection for cloud sync & real-time updates (offline mode supported for cashier POS)",
  peripherals: "Compatible with standard USB / Bluetooth Barcode Scanners, Thermal Receipt Printers (ESC/POS 58mm/80mm), and Cash Drawers"
};

export const RELEASE_HISTORY = [
  {
    version: "v1.0.0",
    releaseDate: "August 2026",
    status: "Latest Stable Release",
    highlights: [
      "Official public release of Pharmora Desktop & Web suite",
      "Unified POS checkout engine with barcode rapid-scanner mode",
      "Real-time multi-branch inventory synchronization",
      "Smart Prescription verification queue with dosage validation",
      "Offline-first POS resilience with automatic cloud reconciliation",
      "Integrated Thermal Printer (58mm/80mm) driver compatibility"
    ]
  },
  {
    version: "v0.9.4",
    releaseDate: "June 2026",
    status: "Beta Milestone",
    highlights: [
      "Role-based permission controls and shift closing sheets",
      "Low-stock threshold triggers and supplier purchase order export",
      "Mobile money and split-payment checkout flows",
      "Delivery dispatch tracking dashboard"
    ]
  }
];
