
import React, { useState } from 'react'

function Membership() {
  const accordionData = [
    {
      title: "Access the best studios and instructors from across the country, from anywhere",
      content: "Stream workouts anytime, no matter where you are located."
    },
    {
      title: "Endless variety (Yoga, Pilates, barre, HIIT, dance and more)",
      content: "Discover new classes and styles every week."
    },
    {
      title: "Unlimited on-demand classes included (free!)",
      content: "Replay your favorite workouts whenever you want."
    },
    {
      title: "Real-time instruction with personalized attention",
      content: "Stay motivated with feedback from real trainers."
    },
    {
      title: "Exclusive perks from nutrition, beauty, apparel and lifestyle brands",
      content: "Get discounts and offers from our partner brands."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  // -------------pricing cards----------------------
    const [selectedPlan, setSelectedPlan] = useState('startups');

  const plans = [
    {
      id: 'individual',
      name: 'individual',
      description: 'freelancers and independent designers',
      price: '$59',
      period: '/month',
      features: [],
      showDetails: true
    },
    {
      id: 'startups',
      name: 'startups',
      description: 'an ideal solution for emerging companies',
      price: '$99',
      period: '/month',
      tag: 'ultimate saver',
      features: [
        'Everything included in the Individual plan',
        'Multiple users per account',
        'Licensed for teams, startups, agencies and corporates',
        'Commercial use'
      ],
      showDetails: true
    },
    {
      id: 'enterprise',
      name: 'enterprise',
      description: 'best choice for large companies',
      price: '$159',
      period: '/month',
      features: [],
      showDetails: true
    }
  ];

  // ----------------------table-------------------
   const plansTable = [
    {
      name: 'Basic',
      price: '$12',
      period: '/year',
      description: 'This plan is perfect for my fellow sloth who gets the job done slowly',
      isPopular: false,
      buttonClass: 'bg-teal-100 text-teal-600 hover:bg-teal-200'
    },
    {
      name: 'Premium',
      price: '$15',
      period: '/year', 
      description: 'This plan is perfect for an even lazier sloth people who always sleeps.',
      isPopular: true,
      buttonClass: 'bg-teal-500 text-white hover:bg-teal-600'
    },
    {
      name: 'Ultra',
      price: '$19',
      period: '/year',
      description: 'This plan is the best for inactive people who barely do anything',
      isPopular: false,
      buttonClass: 'bg-teal-100 text-teal-600 hover:bg-teal-200'
    }
  ];

  const features = [
    {
      category: 'Overview',
      items: [
        { name: 'Total Li-Mu', basic: true, premium: true, ultra: true, type: 'check' },
        { name: 'AI Model', basic: '150T', premium: '250T', ultra: '550T', type: 'text' },
        { name: 'AI Health Assistant', basic: '2,000 GB', premium: '5,000 GB', ultra: '10,000 GB', type: 'text' },
        { name: 'E-Pharmacy Features', basic: false, premium: false, ultra: true, type: 'check' },
        { name: 'Doctor Nightingale AI', basic: false, premium: false, ultra: true, type: 'check' },
        { name: 'AI Latency Time', basic: '10%', premium: '15%', ultra: '25%', type: 'text' }
      ]
    },
    {
      category: 'Medical Feature',
      items: [
        { name: 'Disease Scan', basic: false, premium: true, ultra: true, type: 'check' },
        { name: 'Medical Database', basic: '5,000', premium: '50,000', ultra: '200,000', type: 'text' },
        { name: 'Maximum Request Time', basic: '$200', premium: '$500', ultra: '$500', type: 'text' }
      ]
    }
  ];

  const CheckIcon = ({ isActive }) => (
    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
      isActive ? 'bg-teal-500' : 'bg-red-400'
    }`}>
      {isActive && (
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      {!isActive && (
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )}
    </div>
  );


  return (
    <div>
      {/* -------------------------------------- */}
      {/* ----------------cards---------------------- */}
      <div>
         <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 p-8 flex items-center">
      <div className="w-full max-w-6xl mx-auto flex gap-8">
        
        {/* Left Side */}
        <div className="flex-1">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-8">
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-800 leading-tight">
            Pick your<br />
            ideal plan
          </h1>
          
          <p className="text-gray-600 mt-6 text-lg">
            Start your journey with a pocket-friendly plans. It's time to<br />
            elevate your brand with an mind boggling illustrations.
          </p>
        </div>

        {/* Right Side - Plans */}
        <div className="flex-1 space-y-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`
                relative cursor-pointer transition-all duration-300 ease-in-out
                ${selectedPlan === plan.id 
                  ? 'bg-white border-4 border-black rounded-3xl p-8 shadow-xl transform scale-105' 
                  : 'bg-pink-200 rounded-2xl p-6 hover:bg-pink-300'
                }
              `}
            >
              {/* Tag for startups plan */}
              {plan.tag && selectedPlan === plan.id && (
                <div className="absolute -top-3 left-8 bg-black text-white text-xs px-3 py-1 rounded-full">
                  {plan.tag}
                </div>
              )}

              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${selectedPlan === plan.id ? 'text-black' : 'text-gray-800'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mt-1 ${selectedPlan === plan.id ? 'text-gray-600' : 'text-gray-700'}`}>
                    {plan.description}
                  </p>
                </div>
                
                <div className="text-right">
                  <span className={`text-3xl font-bold ${selectedPlan === plan.id ? 'text-black' : 'text-gray-800'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${selectedPlan === plan.id ? 'text-gray-600' : 'text-gray-700'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features - only show for selected plan */}
              {selectedPlan === plan.id && plan.features.length > 0 && (
                <div className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center mr-3">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* View plan details */}
              <div className={`
                flex items-center justify-between mt-6
                ${selectedPlan === plan.id ? 'text-black' : 'text-gray-700'}
              `}>
                <span className="text-sm font-medium">view plan details</span>
                <div className="w-5 h-5 flex items-center justify-center">
                  <span className="text-lg">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      </div>


      {/* -------------------table------------------- */}
      <div>
       <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-teal-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Header - Plans */}
          <div className="grid grid-cols-1 md:grid-cols-4 bg-white">
            {/* Empty cell for feature names column */}
            <div className="hidden md:block p-6"></div>
            
            {/* Plan headers */}
            {plansTable.map((plan, index) => (
              <div key={plan.name} className="p-6 text-center relative">
                {plan.isPopular && (
                  <div className="absolute top-4 right-4 bg-teal-400 text-white text-xs px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600 text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-600 mb-6 h-12">
                  {plan.description}
                </p>
                <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${plan.buttonClass}`}>
                  {plan.name === 'Premium' ? 'Add To Cart' : plan.name === 'Ultra' ? 'Learn More' : 'Add To Cart'}
                </button>
              </div>
            ))}
          </div>

          {/* Features Table */}
          <div className="bg-gray-50">
            {features.map((category, categoryIndex) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="bg-white border-t">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="p-4 font-bold text-gray-800 bg-gray-50">
                      {category.category}
                    </div>
                    <div className="hidden md:block"></div>
                    <div className="hidden md:block"></div>
                    <div className="hidden md:block"></div>
                  </div>
                </div>

                {/* Feature Rows */}
                {category.items.map((feature, featureIndex) => (
                  <div key={feature.name} className="border-t border-gray-200">
                    {/* Mobile Layout */}
                    <div className="md:hidden">
                      <div className="p-4 bg-white font-medium text-gray-700">
                        {feature.name}
                      </div>
                      <div className="grid grid-cols-3 bg-gray-50">
                        {plans.map((plan, planIndex) => (
                          <div key={`${feature.name}-${plan.name}`} className="p-4 text-center border-r border-gray-200 last:border-r-0">
                            <div className="text-xs text-gray-500 mb-1">{plan.name}</div>
                            {feature.type === 'check' ? (
                              <div className="flex justify-center">
                                <CheckIcon isActive={
                                  planIndex === 0 ? feature.basic :
                                  planIndex === 1 ? feature.premium : feature.ultra
                                } />
                              </div>
                            ) : (
                              <div className="text-sm text-gray-800">
                                {planIndex === 0 ? feature.basic :
                                 planIndex === 1 ? feature.premium : feature.ultra}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:grid md:grid-cols-4">
                      <div className="p-4 font-medium text-gray-700 bg-white">
                        {feature.name}
                      </div>
                      <div className="p-4 text-center bg-gray-50 flex justify-center items-center">
                        {feature.type === 'check' ? (
                          <CheckIcon isActive={feature.basic} />
                        ) : (
                          <span className="text-sm text-gray-800">{feature.basic}</span>
                        )}
                      </div>
                      <div className="p-4 text-center bg-gray-50 flex justify-center items-center">
                        {feature.type === 'check' ? (
                          <CheckIcon isActive={feature.premium} />
                        ) : (
                          <span className="text-sm text-gray-800">{feature.premium}</span>
                        )}
                      </div>
                      <div className="p-4 text-center bg-gray-50 flex justify-center items-center">
                        {feature.type === 'check' ? (
                          <CheckIcon isActive={feature.ultra} />
                        ) : (
                          <span className="text-sm text-gray-800">{feature.ultra}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* Bottom Buttons */}
            <div className="bg-white border-t p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="hidden md:block"></div>
                {plansTable.map((plan) => (
                  <button key={`bottom-${plan.name}`} className={`py-2 px-4 rounded-lg font-medium transition-colors ${plan.buttonClass}`}>
                    {plan.name === 'Premium' ? 'Add To Cart' : plan.name === 'Ultra' ? 'Add To Cart' : 'Add To Cart'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>





      {/* -------------------cta------------------- */}
      <div>
        Button: *“Join Now”*
        * Links to signup/checkout page.
        * Subtext: *"No hidden fees. Cancel anytime."*
      </div>
      {/* ----------------faq ---------------------- */}
      <div className='mt-[15vh]'>

        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left side */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              All your favorite home workouts, together at last.
            </h1>
            <p className="text-gray-600 mb-6">
              No initiation fees. No blackout times. Freeze or cancel any time.
            </p>

            {/* Accordion */}
            <div className="space-y-3">
              {accordionData.map((item, index) => (
                <div key={index} className="border rounded-lg">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center p-4 text-left font-medium"
                  >
                    <span>{item.title}</span>
                    <span>{openIndex === index ? "−" : "+"}</span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 pt-0 text-gray-600">{item.content}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition">
              VIEW PRICING
            </button>
          </div>

          {/* Right side (hidden on mobile) */}
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg"
              alt="Workout"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>


        {/* Purpose:** Remove doubts and objections so users feel safe signing up.
* **Questions to include:**

  * *“Can I cancel my membership anytime?”* – Yes, cancel anytime before renewal.
  * *“Do you offer refunds?”* – Yes, within 7 days of payment.
  * *“Is there a free trial?”* – Yes, 7-day free trial for new members.
  * *“Can I switch plans later?”* – Yes, upgrade or downgrade anytime.
  * *“Do you give student discounts?”* – Yes, with valid student ID. */}
      </div>


      {/* -------------------------------------- */}



      {/* 
      
      
      
      */}
    </div>
  )
}

export default Membership


/***
 ----------------------------------------------- 
Perfect 🚀 Let’s break down **everything you need for your Membership Plans page**. I’ll give you a **full detailed structure**, explain **why each section is important**, and what exact **content/data** to put there.

---

# 📄 Membership Plans Page (Full Details)

---

## 1. **Hero / Intro Section**

* **Purpose:** Quickly tell visitors what this page is about and encourage them to find the best plan for their goals.
* **Content:**

  * Header: *"Find the Right Plan for Your Fitness Journey"*
  * Subtext: *"Whether you're looking for flexible monthly access, full-year commitment, or personalized coaching, we’ve got the perfect membership for you."*

---

## 2. **Membership Options (Cards)**

* **Purpose:** Present different plan choices clearly.

* **Plans to include:**

  1. **Monthly Plan**

     * Price: \$30/month
     * Features: Unlimited class access, locker, standard coaching
     * Best for beginners who want flexibility.

  2. **Yearly Plan**

     * Price: \$300/year (save 2 months!)
     * Features: Unlimited class access, locker, free nutrition consultation, guest pass once a month
     * Best for long-term commitment.

  3. **Student Plan**

     * Price: \$20/month
     * Features: Unlimited class access, shared locker, student discount, flexible class hours
     * Best for college students with budget.

  4. **Personal Training Plan**

     * Price: \$50/session or \$400/month
     * Features: 1-on-1 personal trainer, nutrition coaching, personalized workouts, progress tracking
     * Best for people who need tailored support.

* **Design Tip:**
  Each plan should be in a **card layout** with:

  * Plan name
  * Price
  * Features checklist (✔️, ❌ icons)
  * **“Join Now” button**

---

## 3. **Comparison Table**

* **Purpose:** Help users compare features easily and push them toward the higher-value plan.
* **Example Table:**

| Features           | Monthly | Yearly        | Student          | Personal Training |
| ------------------ | ------- | ------------- | ---------------- | ----------------- |
| Unlimited Classes  | ✔️      | ✔️            | ✔️               | ✔️                |
| Locker Access      | ✔️      | ✔️            | Limited          | ✔️                |
| Guest Pass         | ❌       | ✔️            | ❌                | ❌                 |
| Nutrition Coaching | ❌       | ✔️            | ❌                | ✔️                |
| Personal Trainer   | ❌       | ❌             | ❌                | ✔️                |
| Discount           | ❌       | Save 2 months | Student discount | ❌                 |

* Highlight **Yearly plan as “Most Popular”**.

---

## 4. **Call-to-Action (Join Now / Register)**

* **Purpose:** Convert visitors into paying members.
* **Content:**

  * Button: *“Join Now”*
  * Links to signup/checkout page.
  * Subtext: *"No hidden fees. Cancel anytime."*

---

## 5. **FAQs Section**

* **Purpose:** Remove doubts and objections so users feel safe signing up.
* **Questions to include:**

  * *“Can I cancel my membership anytime?”* – Yes, cancel anytime before renewal.
  * *“Do you offer refunds?”* – Yes, within 7 days of payment.
  * *“Is there a free trial?”* – Yes, 7-day free trial for new members.
  * *“Can I switch plans later?”* – Yes, upgrade or downgrade anytime.
  * *“Do you give student discounts?”* – Yes, with valid student ID.

---

------------------------------------------------
Membership Plans Page – Detailed Breakdown
1. Hero Section (Intro to Memberships)

Purpose: Immediately tell visitors what they’ll get by joining.

Content:

Header: “Choose the Plan That Fits Your Lifestyle”

Subtext: “Flexible memberships designed to fit every fitness journey – whether you’re a student, pro, or just starting.”

CTA button: “See Plans” (scrolls to pricing table).

2. Membership Types (Plan Cards)

Purpose: Show the different plan options clearly.

Structure: Grid of cards (monthly, yearly, student, personal training).

Details on each card:

Plan Name (e.g., Monthly Plan).

Price (e.g., $29/month).

Key Features (from the checklist below).

Join Now button (primary CTA).

👉 Example:

Monthly Plan – $29/month

Access to all classes

Free lockers

1 free personal coaching session

Join Now

3. Features Checklist (For Each Plan)

Purpose: Show visitors what’s included in each plan.

Features to include:

Unlimited Class Access

Free Lockers

Personal Coaching

Nutrition Advice

24/7 Gym Access

Guest Passes

Discounts on Supplements

✅ You can use checkmarks (✔) for included features and dashes (—) for excluded ones.

4. Comparison Table (Side-by-Side)

Purpose: Help users compare benefits per plan easily.

Structure:

Columns: Monthly | Yearly | Student | Personal Training

Rows: Features (class access, lockers, coaching, etc).

Show ✔ or ✖ to indicate availability.

👉 Example row:

Class Access: ✔ (all)

Personal Trainer: ✖ (monthly/student), ✔ (personal training plan only).

Discounts: ✖ (monthly), ✔ (yearly).

5. Special Highlight Section (Best Value Plan)

Purpose: Push the most profitable/popular plan (usually yearly).

Design: Add a “🔥 Best Value” badge on the Yearly Plan.

Text: “Save 20% when you commit for a year!”

6. FAQs Section (Common Questions)

Purpose: Remove doubts that stop people from purchasing.

Content to include:

Do you offer free trials? → Yes, 7-day free trial for new members.

Can I cancel anytime? → Yes, monthly plans can be canceled anytime.

What if I miss a class? → You can rebook another available session.

Refunds available? → Refunds available within 7 days of joining.

Do students need ID? → Yes, valid student ID is required.

7. Final CTA Section (Conversion Push)

Purpose: Reinforce action.

Content:

Headline: “Ready to Transform Your Fitness Journey?”

Subtext: “Pick your plan today and start training with us!”

Big Join Now button → leads to signup/payment page.

🎨 Design + UX Tips:

Yellow (primary color): Highlight pricing & CTA buttons.

Black/Dark gray: Background for comparison tables.

White text: Ensure readability.

Green/Blue (secondary): Use for checkmarks or benefits.

⚡This page should be conversion-focused, meaning:

Keep CTAs (“Join Now”) visible.

Highlight best value plan.

Use real FAQs to address fears.

Use testimonials from this plan somewhere for trust.

 */