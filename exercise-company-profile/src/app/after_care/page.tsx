import OrganismsPostCareInstruction from "@/components/organisms/o_post_care_instruction_collapse";

export default function AfterCarePage() {
    const postCareInstruction = [
        {
            treatment: 'Facial',
            detail: [
                { 
                    title: 'General Aftercare',
                    description: '- Avoid touching your face for at least 4 hours<br/>- Do not wear heavy makeup for the first 24 hours; use clean brushes if needed<br/>- Avoid sun exposure, saunas, and steam rooms on the treatment day<br/>- No swimming for 24 hours after the treatment<br/>- Always apply SPF<br/>- Use gentle skincare; avoid exfoliating actives for at least 3 days<br/>- Facial treatments can be repeated every 2-4 week<br/>- Stay hydrated — drink plenty of water'
                }
            ]
        },
        {
            treatment: 'Botox',
            detail: [
                {
                    title: "4 HOURS AFTER TREATMENT",
                    description: "- Avoid sleeping facedown or applying pressure on the treated area<br/>- Gently move the treated area for a few seconds every 30 minutes",
                },
                {
                    title: "6 HOURS AFTER TREATMENT",
                    description: "- Avoid washing your face<br/>- Avoid using makeup<br/>- Avoid swimming (24 hours)",
                },
                {
                    title: "GENERAL AFTERCARE, 10-14 DAYS AFTER TREATMENT",
                    description: "- Avoid facial massage, facial treatments, laser procedures, or any heat-based or pressure-based actions on the treated area<br/>- Avoid intense physical activity, sauna, and steam rooms<br/>- Do not massage the treated area<br/>- Reduce alcohol consumption",
                },
                {
                    title: "USUAL SYMPTOMS",
                    description: "- Bruising: Common at injection sites; can range from small to more extensive and usually improves within 7-14 days<br/>- Dizziness: May occur after forehead or glabella injections, especially if you frequently raise your eyebrows; typically improves within 10-14 days<br/>- Soreness: Can happen with masseter (jaw) injections, especially when chewing<br/>- Puffiness: May occur and can be managed with a cold compress and sleeping with an extra pillow",
                },
                {
                    title: "KEY REMINDERS",
                    description: "- Botulinum toxin starts showing results within 3-14 days<br/>- Maintenance treatments are recommended every 3-6 months<br/>- Minimal movement in the treated area is recommended to achieve natural results",
                },
            ]
        },
        {
            treatment: 'Filler & Collagen Stimulator Filler',
            detail: [
                {
                    title: "6 HOURS AFTER TREATMENT",
                    description: "- Avoid washing your face<br/>- Avoid using makeup<br/>- Avoid swimming (24 hours)",
                },
                {
                    title: "GENERAL AFTERCARE, 10-14 DAYS AFTER TREATMENT",
                    description: "- Avoid facial massage, facial treatments, laser procedures, or any heat-based or pressure-based actions on the treated area<br/>- Avoid intense physical activity, sauna, and steam rooms<br/>- Do not massage the treated area<br/>- Reduce alcohol consumption",
                },
                {
                    title: "USUAL SYMPTOMS",
                    description: "- Swelling: A common side effect that can occur a few hours after treatment. It may last for several days to weeks, depending on the individual and the type of filler used. Apply a cold compress to help reduce swelling<br/>- Bruising: Very common around the injection site. Bruises may range from small to extensive and typically improve within 7 to 14 days<br/>- Redness: Mild redness or inflammation can occur at injection points. This is usually temporary and resolves within a few hours to days<br/>- Tenderness or Sensitivity: The treated area may feel sore or sensitive to touch for a few days. This is generally mild and will gradually subside<br/>- Itching or Tightness: A mild sensation of itching, tightness, or pressure may occur in the treated area. This usually improves over time<br/>- Uneven Texture: A slightly uneven surface may be felt initially. The filler will settle and become smoother over time",
                },
                {
                    title: "KEY REMINDERS",
                    description: "- Filler lasts 6-15 months, depending on the product used.<br/>- You may start noticing other facial concerns post-treatment — this is normal as you're now more focused on facial details<br/>- If volume seems reduced after 14 days, it’s likely due to swelling subsiding — more filler may be needed to reach your desired look<br/>- Perfect facial symmetry is not realistic. Differences between left and right sides may appear more noticeable after treatment",
                },
            ]
        },
        {
            treatment: 'Filler Removal',
            detail: [
                {
                    title: "GENERAL AFTERCARE, 10-14 DAYS AFTER TREATMENT",
                    description: "- Avoid makeup for 6 hours post-treatment<br/>- Avoid swimming for 24 hours<br/>- Apply a cold compress to the treated area",
                },
                {
                    title: "USUAL SYMPTOMS",
                    description: "- Swelling: a common side effect that may appear a few hours after treatment, often more noticeable than after filler treatment<br/>- Bruising: very common around the injection site<br/>- Redness: mild inflammation may occur at injection points; usually temporary and improves within hours to days<br/>- Tenderness or sensitivity: generally mild and gradually improves over time",
                },
                {
                    title: "KEY REMINDERS",
                    description: "- Results typically appear within 3–14 days.<br/>- Treatment can be repeated after 14 days<br/>- New filler can be administered no sooner than 14 days after removal.",
                },
            ]
        },
        {
            treatment: 'Laser',
            detail: [
                {
                    title: "6 HOURS AFTER TREATMENT",
                    description: "- Avoid washing your face",
                },
                {
                    title: "GENERAL AFTERCARE, 10-14 DAYS AFTER TREATMENT",
                    description: "- Use post-treatment serum or cream (e.g., Vorta Nutrition Cream) to aid healing<br/>- Apply post-treatment SPF daily (e.g., Sunshield) and reapply as needed<br/>- Avoid regular skincare containing active ingredients<br/>- Avoid makeup<br/>- Avoid excessive sweating or exercise<br/>- Avoid swimming",
                },
                {
                    title: "14 DAYS POST-TREATMENT",
                    description: "- Avoid excessive sun exposure<br/>- Avoid exfoliating products like retinol and AHAs<br/>- Stay well-hydrated",
                },
                {
                    title: "USUAL SYMPTOMS",
                    description: "- Swelling: a common side effect that may occur a few hours after treatment<br/>- Redness: mild inflammation may appear at the injection site; usually temporary and improves within hours to days<br/>- Tenderness or sensitivity: generally mild and will gradually subside<br/>- Peeling: may occur a few days to weeks after treatment<br/>- Scabbing: some treatments, such as for freckles, may cause temporary scabs. Avoid picking at the skin",
                },
                {
                    title: "KEY REMINDERS",
                    description: "- Results may appear within 3–14 days<br/>- Repeat sessions can be done after 14 days to 1 month, depending on intensity<br/>- Best results are typically seen after 3–5 sessions",
                },
            ]
        },
        {
            treatment: 'Microneedle (Vorta Exosome)',
            detail: [
                {
                    title: "6 HOURS AFTER TREATMENT",
                    description: "- Avoid washing your face",
                },
                {
                    title: "GENERAL AFTERCARE : 3-5 DAYS, POST TREATMENT",
                    description: "- Use post-treatment serum or cream (e.g., Vorta Nutrition Cream) to aid healing<br/>- Apply post-treatment SPF daily (e.g., Sunshield) and reapply as needed<br/>- Avoid regular skincare containing active ingredients<br/>- Avoid makeup<br/>- Avoid excessive sweating or exercise<br/>- Avoid swimming",
                },
                {
                    title: "14 DAYS POST-TREATMENT",
                    description: "- Avoid excessive sun exposure<br/>- Avoid exfoliating products like retinol and AHAs<br/>- Stay well-hydrated",
                },
                {
                    title: "USUAL SYMPTOMS",
                    description: "- Swelling: A common side effect that may appear within a few hours after treatment<br/>- Redness: Mild redness or inflammation may occur at injection sites and typically subsides within hours to a few days<br/>- Pain or Sensitivity: Usually mild and gradually improves without intervention<br/>- Peeling: May occur several days to weeks after treatment as part of the skin renewal process",
                },
                {
                    title: "KEY REMINDERS",
                    description: "- Visible results may appear within 3–14 days<br/>- Treatment can be repeated after 14 days to 1 month, depending on needle depth and intensity<br/>- Optimal results are typically seen after 3–5 sessions",
                },
            ]
        },
        {
            treatment: 'SKINBOOSTER (Vorta Booster, Vorta Salmon DNA, Juvelook, Acne Fighter, PRP)',
            detail: [
                {
                    title: "6 HOURS AFTER TREATMENT",
                    description: "- Avoid washing your face",
                },
                {
                    title: "GENERAL AFTERCARE",
                    description: "- Small bumps may appear for a few hours up to 7 days — this is normal.<br/>- Avoid makeup and swimming for 24 hours.<br/>- Avoid intense exercise for 24 hours.<br/>- Avoid any treatment on the treated area for 14 days.<br/>- Apply a cold compress if you experience discomfort, swelling, or bruising",
                },
                {
                    title: "USUAL SYMPTOMS",
                    description: "- Swelling: a common side effect that may appear a few hours after treatment, often more noticeable than after filler treatment<br/>- Bruising: very common around the injection site<br/>- Redness: mild inflammation may occur at injection points; usually temporary and improves within hours to days<br/>- Tenderness or sensitivity: generally mild and gradually improves over time",
                },
            ]
        },
    ]

    return (
        <div className="flex flex-col min-h-screen p-5 lg:p-10 lg:max-w-[1440px] lg:mx-auto">
            <OrganismsPostCareInstruction postCareInstruction={postCareInstruction}/>
        </div>
    );
}
