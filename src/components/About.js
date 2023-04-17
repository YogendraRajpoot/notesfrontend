import React from "react";

const About = () => {
  const HEIGHT = window.innerHeight;

  return (
    <div
      className="py-5 bg-black"
      style={{
        height: `${HEIGHT - 0.075 * HEIGHT}px`,
      }}
    >
      <h1 className="px-5 text-light">About Notes Book</h1>
      <ul className="list-group mt-3 px-5">
        <li class="list-group-item py-2">
          Capture, Organize, and Secure Your Thoughts: Our notes platform
          provides a convenient and user-friendly interface for capturing and
          organizing your personal notes, while ensuring utmost security for
          your data.
        </li>
        <li class="list-group-item py-2 mt-2">
          Peace of Mind: With our robust security measures, you can trust that
          your personal notes are safe and protected from unauthorized access,
          giving you peace of mind while using our platform.
        </li>
        <li class="list-group-item py-2 mt-2">
          Store Your Ideas with Confidence: Our platform uses industry-standard
          encryption techniques to safeguard your personal notes, ensuring that
          your data is stored securely and only accessible by you.
        </li>
        <li class="list-group-item py-2 mt-2">
          Easy-to-Use Interface: Our platform offers a user-friendly interface
          that makes it simple and intuitive to write, edit, and delete your
          personal notes, providing a seamless experience for managing your
          ideas.
        </li>
        <li class="list-group-item py-2 mt-2">
          Enhance Your Creativity: Our secure notes platform empowers you to
          capture and organize your thoughts, ideas, and inspirations without
          worrying about data security, allowing you to focus on unleashing your
          creativity.
        </li>
        <li class="list-group-item py-2 mt-2">
          Access Anytime, Anywhere: Our platform is accessible from any device
          with an internet connection, giving you the flexibility to write and
          access your personal notes whenever and wherever you need them.
        </li>
        <li class="list-group-item py-2 mt-2">
          Private and Confidential: We prioritize the privacy and
          confidentiality of your personal notes, ensuring that your data is not
          shared or used for any unauthorized purposes. Your notes are solely
          for your personal use and benefit.
        </li>
      </ul>
    </div>
  );
};

export default About;
