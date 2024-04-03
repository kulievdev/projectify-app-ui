const currentPlans = [
    {
        type: "secondary",
        subtitle: "For Individuals",
        iconName: "paperPlane",
        checkColor: "check-green",
        title: "Starter",
        priceMonthly: "$9.99",
        priceYearly: "$102.99",
        projects: "10",
        users: "10",
        storage: "10GB",
        extras: ["Email Support"]
    },
    {
        type: "primary",
        subtitle: "For Small Teams",
        iconName: "airplane",
        checkColor: "check-orange",
        title: "Professional",
        priceMonthly: "$29.99",
        priceYearly: "$311.99",
        projects: "Unlimited",
        users: "25",
        storage: "50GB",
        extras: ["Priority Email Support", "Advanced Analytics"]
    },
    {
        type: "secondary",
        subtitle: "For Large Teams",
        iconName: "rocket",
        checkColor: "check-green",
        title: "Enterprise",
        priceMonthly: "$99.99",
        priceYearly: "$1080.99",
        projects: "Unlimited",
        users: "Scalable",
        storage: "Scalable",
        extras: [
            "24/7 Priority Support",
            "Dedicated Account Manager",
            "Single Sign-On (SSO)",
            "Custom Integrations"
        ]
    }
];

export default currentPlans;
