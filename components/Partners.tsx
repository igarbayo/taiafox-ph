/* eslint-disable @next/next/no-img-element */

export default function Partners({ className = "" }: { className?: string }) {
  return (
    <div className={`partners ${className}`.trim()}>
      <a href="https://hackspain.com" target="_blank" rel="noreferrer">
        <img src="/logos/hackspain2.png" alt="HackSpain" className="hackspain" />
      </a>
      <div className="divider" />
      <a href="https://www.happyrobot.ai" target="_blank" rel="noreferrer">
        <img src="/logos/happyrobot.png" alt="HappyRobot" className="happyrobot" />
      </a>
    </div>
  );
}
