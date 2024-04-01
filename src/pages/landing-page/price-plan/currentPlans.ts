const currentPlans = [
    {
        type: "secondary",
        subtitle: "For Individuals",
        iconName: "paperPlane",
        checkColor: "check-green",
        title: "Starter",
        price: "$9.99",
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
        price: "$29.99",
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
        price: "$99.99",
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
