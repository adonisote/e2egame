'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Card } from '@/app/types/card';
import projectManagement from '@/public/images/ProjectManagement.png'
import softwareEngineering from '@/public/images/SoftwareEngineerung.png'
import architecture from '@/public/images/Architecture.png'
import forwards from '@/public/images/forwards.png'
import backwards from '@/public/images/backwards.png'
import jump from '@/public/images/jump.png'
import archIcon from '@/public/images/arch-icon.png'
import seIcon from '@/public/images/se-icon.png'
import pmIcon from '@/public/images/pm-icon.png'

const cardsData: Card[] = [
  {
    "id": 1,
    "category": "Architecture",
    "context": "You need to integrate a third-party API into your architecture.",
    "action": "Move back 1 field to research and implement it.",
    "move": -1
  },
  {
    "id": 2,
    "category": "Architecture",
    "context": "Your team has identified a potential scalability issue in your design.",
    "action": "Go back 2 fields to resolve it.",
    "move": -2
  },
  {
    "id": 3,
    "category": "Architecture",
    "context": "Your architecture proposal is about to face the ultimate test in front of the technical review board.",
    "action": "Move back 1 field to gear up for the showdown.",
    "move": -1
  },
  {
    "id": 4,
    "category": "Architecture",
    "context": "You've been assigned to evaluate a new technology for potential integration.",
    "action": "Go back 2 fields to dive into the assessment and see what this baby can do.",
    "move": -2
  },
  {
    "id": 5,
    "category": "Architecture",
    "context": "Your backend architecture overlooks scalability resulting in performance bottlenecks.",
    "action": "Go back 2 fields and reconsider your approach to laying the groundwork.",
    "move": -2
  },
  {
    "id": 6,
    "category": "Architecture",
    "context": "Your architecture diagram needs a makeover for the upcoming sprint review.",
    "action": "Move back 1 field and impress everyone with your UML skills.",
    "move": -1
  },
  {
    "id": 7,
    "category": "Architecture",
    "context": "Dive into the world of LeanIX, the newest addition to your arsenal of architecture tools.",
    "action": "Move back 1 field and unleash your inner artist.",
    "move": -1
  },
  {
    "id": 8,
    "category": "Architecture",
    "context": "Time for some detective work! Host a Value Stream Mapping session to identify AWS cost optimization opportunities.",
    "action": "Jump back 2 fields to sharpen those investigation skills!",
    "move": -2
  },
  {
    "id": 9,
    "category": "Architecture",
    "context": "You're the chosen one to illuminate your colleagues on the new architecture strategy.",
    "action": "Move back 2 fields as it's proving to be a longer journey.",
    "move": -2
  },
  {
    "id": 10,
    "category": "Architecture",
    "context": "Confluence is feeling the weight of your epic architecture diagram causing it to lag like a tired sloth.",
    "action": "Move back 2 fields and try slicing your masterpiece into bite-sized chunks.",
    "move": -2
  },
  {
    "id": 11,
    "category": "Architecture",
    "context": "You need to lead a brainstorming session to solve a complex technical problem.",
    "action": "Your entire team skips a turn to dive into problem-solving mode together!",
    "move": 0
  },
  {
    "id": 12,
    "category": "Architecture",
    "context": "Oops! Your architecture decision turns into a bottleneck putting the brakes on the team's progress.",
    "action": "Your entire team skips a turn to brainstorm over snacks and colorful diagrams to find a solution.",
    "move": 0
  },
  {
    "id": 13,
    "category": "Architecture",
    "context": "Your architecture decision has led to a significant reduction in technical debt during the PI.",
    "action": "Go to Sprint 4 and roll again for your contribution to continuous improvement.",
    "move": 0
  },
  {
    "id": 14,
    "category": "Architecture",
    "context": "Your architecture concept has been approved for implementation without any changes.",
    "action": "Roll again and see how your solution is being implemented.",
    "move": 0
  },
  {
    "id": 15,
    "category": "Architecture",
    "context": "You've successfully completed the migration of your solution to a cloud-native setup.",
    "action": "Leap forward 3 fields and roll again for a celebratory round.",
    "move": 3
  },
  {
    "id": 16,
    "category": "Architecture",
    "context": "You've identified a critical dependency between two features during PI planning.",
    "action": "Move forward 2 fields for your eagle-eyed contribution!",
    "move": 2
  },
  {
    "id": 17,
    "category": "Architecture",
    "context": "Your architecture documentation has been praised for its clarity and completeness in the architecture board.",
    "action": "Move forward 2 fields and bask in the glory of being the Picasso of architecture.",
    "move": 2
  },
  {
    "id": 18,
    "category": "Architecture",
    "context": "Your Kafka-based event-driven architecture design has caused a minor hiccup in the project timeline.",
    "action": "Roll again to address the impact and ensure alignment with the team.",
    "move": 0
  },
  {
    "id": 19,
    "category": "Architecture",
    "context": "You need to conduct an architecture review session to gather feedback from stakeholders.",
    "action": "Go forward 2 fields for your proactive approach.",
    "move": 2
  },
  {
    "id": 20,
    "category": "Architecture",
    "context": "Your proposal to implement microservices architecture has earned you a high-five from the team.",
    "action": "Move forward 2 fields and get ready to be the star of the show.",
    "move": 2
  },
  {
    "id": 21,
    "category": "Architecture",
    "context": "Your anticipation of cloud portability needs led you to implement containerization.",
    "action": "Jump forward 3 fields and give yourself a high-five for thinking ahead!",
    "move": 3
  },
  {
    "id": 22,
    "category": "Architecture",
    "context": "You attended an Architecture Academy training leveling up your skills and feeling like a superhero with a new power-up.",
    "action": "Move forward 3 fields, roll again and get ready to save the day!",
    "move": 3
  },
  {
    "id": 23,
    "category": "Architecture",
    "context": "You attended a training session on delegation skills learning to pass the torch and lighten your workload.",
    "action": "Inspired by insights from your Community Lead go forward 2 fields.",
    "move": 2
  },
  {
    "id": 24,
    "category": "Architecture",
    "context": "You lead a cloud architecture crash course at the E2E Community workshop unleashing a storm of knowledge.",
    "action": "Leap forward 2 fields feeling like a cloud guru.",
    "move": 2
  },
  {
    "id": 25,
    "category": "Architecture",
    "context": "It's office week and you're finally with your CarByte crew boosting team spirit and sharing laughs.",
    "action": "Move forward 2 fields savoring the energy and gearing up for a team bowling night!",
    "move": 2
  },
  {
    "id": 26,
    "category": "Project Management",
    "context": "Key team member is reassigned to another project.",
    "action": "Go back 1 field and regroup your team strategy.",
    "move": -1
  },
  {
    "id": 27,
    "category": "Project Management",
    "context": "Miscommunication leads to project delays.",
    "action": "Go back 2 fields and schedule a team communication workshop.",
    "move": -2
  },
  {
    "id": 28,
    "category": "Project Management",
    "context": "Project stakeholders resist a key change.",
    "action": "Go back 3 fields and strategize your change management approach.",
    "move": -3
  },
  {
    "id": 29,
    "category": "Project Management",
    "context": "Your project is found to be non-compliant with regulations putting it at risk of derailing the Program Increment.",
    "action": "Go back 3 fields and enlist regulatory experts for guidance.",
    "move": -3
  },
  {
    "id": 30,
    "category": "Project Management",
    "context": "Team conflict threatens project progress.",
    "action": "Go back 1 field and mediate a resolution session.",
    "move": -1
  },
  {
    "id": 31,
    "category": "Project Management",
    "context": "An external dependency is delayed impacting project timelines.",
    "action": "Go back 2 fields and collaborate with stakeholders to expedite resolution.",
    "move": -2
  },
  {
    "id": 32,
    "category": "Project Management",
    "context": "A stakeholder has requested an ad-hoc review of the project roadmap.",
    "action": "Move back 1 field and try to remember where you left your crystal ball.",
    "move": -1
  },
  {
    "id": 33,
    "category": "Project Management",
    "context": "Jira decides to go on strike right in the middle of PIPE throwing your project management plans off track.",
    "action": "Move back 1 field and get creative with colorful sticky notes.",
    "move": -1
  },
  {
    "id": 34,
    "category": "Project Management",
    "context": "Your project scope has expanded unexpectedly.",
    "action": "Go to Sprint 1 and reassess your project boundaries.",
    "move": 0
  },
  {
    "id": 35,
    "category": "Project Management",
    "context": "Key project knowledge is not documented.",
    "action": "Your entire team skips a turn and conducts a knowledge sharing session.",
    "move": 0
  },
  {
    "id": 36,
    "category": "Project Management",
    "context": "An unexpected project risk comes to light potentially impacting project timelines.",
    "action": "Go to Sprint 1 and allocate time for risk mitigation activities.",
    "move": 0
  },
  {
    "id": 37,
    "category": "Project Management",
    "context": "A new manager brings a breath of fresh air to your project team.",
    "action": "Go to Sprint 4 and embrace the newfound energy.",
    "move": 0
  },
  {
    "id": 38,
    "category": "Project Management",
    "context": "The client's VPN hits a snag messing with your groove.",
    "action": "Your entire team skips a turn while you create a ticket in the client’s support system.",
    "move": 0
  },
  {
    "id": 39,
    "category": "Project Management",
    "context": "You've successfully facilitated a project kickoff meeting that didn't put everyone to sleep.",
    "action": "Leap forward 3 fields and enjoy your rockstar moment.",
    "move": 3
  },
  {
    "id": 40,
    "category": "Project Management",
    "context": "Your project presentation needs some touch-ups.",
    "action": "Move forward 1 field and dazzle everyone with your PowerPoint mastery.",
    "move": 1
  },
  {
    "id": 41,
    "category": "Project Management",
    "context": "Your proposal wins applause from the client.",
    "action": "Roll again to see how it is being implemented.",
    "move": 0
  },
  {
    "id": 42,
    "category": "Project Management",
    "context": "You're tasked with onboarding a colleague.",
    "action": "Move forward 1 field, welcome fresh energy to the team and share your wisdom over coffee.",
    "move": 1
  },
  {
    "id": 43,
    "category": "Project Management",
    "context": "Your project documentation gets praised.",
    "action": "Jump forward 2 fields and feel warm and fuzzy inside.",
    "move": 2
  },
  {
    "id": 44,
    "category": "Project Management",
    "context": "You've successfully aligned stakeholders on project objectives.",
    "action": "Move forward 3 fields and celebrate your diplomacy skills.",
    "move": 3
  },
  {
    "id": 45,
    "category": "Project Management",
    "context": "Your project kickoff meeting needs to be rescheduled due to unforeseen circumstances.",
    "action": "Roll again and put on your best 'flexible attitude' hat.",
    "move": 0
  },
  {
    "id": 46,
    "category": "Project Management",
    "context": "Your project timeline gets a boost thanks to a lightning-fast approval process.",
    "action": "Move forward 3 fields and embrace the swift winds of progress.",
    "move": 3
  },
  {
    "id": 47,
    "category": "Project Management",
    "context": "Your project team achieves a major milestone ahead of schedule.",
    "action": "Move forward 3 fields and revel in the sweet taste of success.",
    "move": 3
  },
  {
    "id": 48,
    "category": "Project Management",
    "context": "You're tasked with deciphering a maze of poorly maintained Jira tickets.",
    "action": "Roll again and embark on a journey to untangle the chaos and bring order to the ticket jungle.",
    "move": 0
  },
  {
    "id": 49,
    "category": "Project Management",
    "context": "It's office week and you're finally with your CarByte crew boosting team spirit and sharing laughs.",
    "action": "Move forward 2 fields savoring the energy and enjoying a team dinner together.",
    "move": 2
  },
  {
    "id": 50,
    "category": "Project Management",
    "context": "You brainstorm ways to link key project takeaways to internal initiatives during a Networking Circle session.",
    "action": "Leap forward 2 fields feeling like a networking wizard and ready to see those connections bloom!",
    "move": 2
  },
  {
    "id": 51,
    "category": "Software Engineering",
    "context": "It's debugging time!",
    "action": "Move back 2 fields to sort through the code jungle and squash any issues that come your way.",
    "move": -2
  },
  {
    "id": 52,
    "category": "Software Engineering",
    "context": "Uh-oh! Your CI/CD pipeline takes an unexpected vacation.",
    "action": "Go back 3 fields as you channel your inner tech wizard to bring back the magic!",
    "move": -3
  },
  {
    "id": 53,
    "category": "Software Engineering",
    "context": "A teammate is stuck in a Linux Virtual Machine maze.",
    "action": "Move back 1 field as you lend a hand and share your expertise.",
    "move": -1
  },
  {
    "id": 54,
    "category": "Software Engineering",
    "context": "Your code review unveils some areas for fine-tuning.",
    "action": "Go back 2 fields to absorb the feedback, refine your code and emerge stronger.",
    "move": -2
  },
  {
    "id": 55,
    "category": "Software Engineering",
    "context": "You stumble upon a mysterious error message.",
    "action": "Go back 2 fields to crack the code conundrum and unveil the solution.",
    "move": -2
  },
  {
    "id": 56,
    "category": "Software Engineering",
    "context": "A sudden server crash disrupts your workflow.",
    "action": "Move back 1 field to reboot and get back on track.",
    "move": -1
  },
  {
    "id": 57,
    "category": "Software Engineering",
    "context": "A teammate accidentally merges a breaking change.",
    "action": "Go back 2 fields while you swoop in with your Git prowess to iron out the wrinkles and restore balance!",
    "move": -2
  },
  {
    "id": 58,
    "category": "Software Engineering",
    "context": "You will lead an E2E Community learning session on Git basics but need more time to set up the perfect playground.",
    "action": "Move back 2 fields to make learning a blast!",
    "move": -2
  },
  {
    "id": 59,
    "category": "Software Engineering",
    "context": "You're hit with a sudden network outage.",
    "action": "Skip a turn while you wait for the tech magic to fix it.",
    "move": 0
  },
  {
    "id": 60,
    "category": "Software Engineering",
    "context": "It's code freeze time!",
    "action": "Your entire team skips a turn as you ensure everything's locked down for the release.",
    "move": 0
  },
  {
    "id": 61,
    "category": "Software Engineering",
    "context": "It's sprint retrospective time!",
    "action": "Skip a turn to take a breather and reflect on the highs and lows of the sprint.",
    "move": 0
  },
  {
    "id": 62,
    "category": "Software Engineering",
    "context": "A sudden influx of feature requests derails your plans.",
    "action": "Jump to Sprint 1 as you prioritize and regroup.",
    "move": 0
  },
  {
    "id": 63,
    "category": "Software Engineering",
    "context": "Your automated testing script unexpectedly fails sending you back to the drawing board.",
    "action": "Roll again to see if luck is on your side!",
    "move": 0
  },
  {
    "id": 64,
    "category": "Software Engineering",
    "context": "You discover a more efficient way to deploy code.",
    "action": "Rocket forward 3 fields with your newfound speed!",
    "move": 3
  },
  {
    "id": 65,
    "category": "Software Engineering",
    "context": "Your pull request gets a round of applause from the team.",
    "action": "Move forward 2 fields with pride!",
    "move": 2
  },
  {
    "id": 66,
    "category": "Software Engineering",
    "context": "It's code review time!",
    "action": "Roll again to see if your code gets a thumbs-up or needs a bit of polish.",
    "move": 0
  },
  {
    "id": 67,
    "category": "Software Engineering",
    "context": "You've nailed a new no-code automation solution making tasks a breeze!",
    "action": "Move forward 2 fields and let the automation magic flow!",
    "move": 2
  },
  {
    "id": 68,
    "category": "Software Engineering",
    "context": "You've uncovered a security vulnerability in the codebase and saved the day!",
    "action": "Leap forward 2 fields as the team's security superhero!",
    "move": 2
  },
  {
    "id": 69,
    "category": "Software Engineering",
    "context": "You blow the client's mind with your latest feature!",
    "action": "Move forward 2 fields as the innovation champ leading the charge into the future.",
    "move": 2
  },
  {
    "id": 70,
    "category": "Software Engineering",
    "context": "You’ve optimized database queries for lightning-fast performance.",
    "action": "Leap forward 2 fields as the wizard of database optimization.",
    "move": 2
  },
  {
    "id": 71,
    "category": "Software Engineering",
    "context": "You've adopted a new testing framework to squash bugs early on!",
    "action": "Move forward 2 fields as the testing innovator paving the way for smoother sailing ahead.",
    "move": 2
  },
  {
    "id": 72,
    "category": "Software Engineering",
    "context": "You hit a dead-end while troubleshooting.",
    "action": "Roll again to see if a stroke of brilliance hits you!",
    "move": 0
  },
  {
    "id": 73,
    "category": "Software Engineering",
    "context": "You’ve refactored ancient code into a digital masterpiece.",
    "action": "Flexed your coding muscles and skip ahead 2 fields.",
    "move": 2
  },
  {
    "id": 74,
    "category": "Software Engineering",
    "context": "It's deployment day!",
    "action": "Roll again to see if you encounter any last-minute surprises.",
    "move": 0
  },
  {
    "id": 75,
    "category": "Software Engineering",
    "context": "It's office week and you're finally with your CarByte crew boosting team spirit and sharing laughs.",
    "action": "Move forward 2 fields savoring the energy and enjoying a game night together.",
    "move": 2
  }
]





export default function CardComponent({ category }: { category: string }) {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [showDescription, setShowDescription] = useState<boolean>(false);

  useEffect(() => {
    const filteredCards = cardsData.filter((card) => card.category === category);
    setCards(filteredCards);
  }, [category]);

  // if (cards.length === 0) {
  //   //render icon and category instead of loading. category is passed as prop
  //   return <div>Loading...</div>;
  // }
  // console.log(cards)

  const pickCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  };

  const showCard = () => {
    if (!showDescription) {
      const card = pickCard();
      setSelectedCard(card);
    }
    setShowDescription(prevShow => !prevShow);
  };

  const renderActionIcon = () => {
    if (!selectedCard) {
      return null
    }

    if (selectedCard?.move < 0) {
      return (
        <Image
          src={backwards}
          alt={`Backwards card background`}
          quality={100}
          fill
          style={{ objectFit: "contain" }}
          sizes='400px'
          priority
        />
      )
    } else if (selectedCard?.move > 0) {
      return (
        <Image
          src={forwards}
          alt={`Fordwards card background`}
          quality={100}
          fill
          style={{ objectFit: "contain" }}
          sizes='400px'
          priority
        />

      )

    } else {
      return (
        <Image
          src={jump}
          alt={`Jump card background`}
          quality={100}
          fill
          style={{ objectFit: "contain" }}
          sizes='400px'
          priority
        />

      )

    }
  }

  const renderCardDeck = () => {
    switch (category) {
      case 'Architecture':
        return (
          <Image
            src={architecture}
            alt={`${category} card deck`}
            quality={100}
            fill
            sizes='400px'
            style={{ objectFit: "cover" }}
            priority
          />
        )
      case 'Project Management':
        return (
          <Image
            src={projectManagement}
            alt={`${category} card deck`}
            quality={100}
            fill
            style={{ objectFit: "cover" }}
            sizes='400px'
            priority
          />
        )
      case 'Software Engineering':
        return (
          <Image
            src={softwareEngineering}
            alt={`${category} card deck`}
            quality={100}
            fill
            style={{ objectFit: "cover" }}
            sizes='400px'
            priority
          />
        )
      default:
        return null
    }
  }

  // const renderIcon = () => {
  //   switch (category) {
  //     case 'Architecture':
  //       return (
  //         <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
  //           <Image
  //             src={archIcon}
  //             alt={`${category} icon`}
  //             quality={100}
  //             width={50}
  //             height={50}
  //             priority
  //           />
  //         </div>
  //       );
  //     case 'Project Management':
  //       return (
  //         <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
  //           <Image
  //             src={pmIcon}
  //             alt={`${category} icon`}
  //             quality={100}
  //             width={50}
  //             height={50}
  //             priority
  //           />
  //         </div>
  //       );
  //     case 'Software Engineering':
  //       return (
  //         <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
  //           <Image
  //             src={seIcon}
  //             alt={`${category} icon`}
  //             quality={100}
  //             width={50}
  //             height={50}
  //             priority
  //           />
  //         </div>
  //       );
  //     default:
  //       return null;
  //   }
  // };



  return (
    <button onClick={showCard} className='w-full h-full  rounded-lg overflow-hidden'>
      <div className='relative flex flex-col items-center justify-center h-full overflow-hidden '>

        {
          !showDescription ? (
            <div className='relative overflow-hidden h-full w-full'>
              {renderCardDeck()}
            </div>
          ) : (
            selectedCard && (
              <div className='h-full flex flex-col items-center justify-center'>
                {/* {renderIcon()} */}
                <p className='text-black text-xs m-2 z-20'>{selectedCard.context}</p>
                <p className='text-black text-xs m-2 z-20'>{selectedCard.action}</p>
                {renderActionIcon()}
              </div>
            )
          )
        }
      </div >
    </button >
  );
}
