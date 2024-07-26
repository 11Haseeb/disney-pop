import React from "react";

export default function Home() {
  return (
    <div>
      <header className="t-h-screen t-bg-cover t-grid t-place-items-center">
        <h2 className="t-text-white t-text-[7rem] t-mb-[9rem] text-center">
          <strong>Disney Pop</strong>
        </h2>
      </header>

      <main className="container py-5">
        <h1 className="text-center t-text-5xl pb-5">Welcome to Disney Pop!</h1>
        <p className="pb-3 t-text-3xl">
          <u>
            <i>
              <b>
                This app is designed to bring the magic of Disney to life in the
                digital world using React.
              </b>
            </i>
          </u>
        </p>
        <h2 className="py-3">Key Features:</h2>
        <ul className="t-leading-[2rem]">
          <li>
            <strong>Interactive Experience:</strong> Engage with your favorite
            Disney characters and stories through interactive elements.
          </li>
          <li>
            <strong>Explore Disney Worlds:</strong> Dive into various Disney
            worlds, from classic tales to the latest adventures.
          </li>
          <li>
            <strong>Personalization:</strong> Customize your experience with
            user profiles and preferences.
          </li>
          <li>
            <strong>Games and Activities:</strong> Enjoy games, puzzles, and
            activities inspired by Disney themes.
          </li>
          <li>
            <strong>Content Library:</strong> Access a vast library of Disney
            movies, shows, and music.
          </li>
          <li>
            <strong>Community:</strong> Connect with other Disney fans and share
            your experiences.
          </li>
          <li>
            <strong>Responsive Design:</strong> Optimized for use across
            different devices and screen sizes.
          </li>
          <li>
            <strong>Accessibility:</strong> Designed to be inclusive and
            accessible to all users.
          </li>
          <li>
            <strong>Real-time Updates:</strong> Stay up-to-date with the latest
            Disney news, releases, and events.
          </li>
          <li>
            <strong>Search and Navigation:</strong> Easily find content and
            navigate through different sections of the app.
          </li>
          <li>
            <strong>Parental Controls:</strong> Manage children's access and set
            parental controls for a safe browsing experience.
          </li>
          <li>
            <strong>Multi-language Support:</strong> Available in multiple
            languages for global accessibility.
          </li>
          <li>
            <strong>Integration:</strong> Seamlessly integrate with Disney's
            ecosystem of products and services.
          </li>
          <li>
            <strong>Feedback and Support:</strong> Provide feedback and receive
            support to enhance your experience.
          </li>
          <li>
            <strong>Security:</strong> Ensure your data and privacy are
            protected with robust security measures.
          </li>
        </ul>
        <p>Start your magical journey with the Disney React App today!</p>
      </main>

      <article className="container mb-5">
        <h3 className="t-text-3xl pb-5">
          <u>
            <b>MORE: </b>
          </u>
        </h3>

        <p className="t-text-justify">
          Step into the enchanting world of Disney with the Disney React App,
          where imagination meets technology. Designed with fans in mind, this
          innovative application brings the magic of Disney to your fingertips.
          Explore a rich tapestry of beloved characters, timeless stories, and
          captivating adventures through interactive experiences and
          personalized content. Whether you're reliving classic moments or
          discovering new favorites, the Disney React App offers a seamless
          blend of entertainment and engagement. Dive into diverse Disney
          worlds, enjoy interactive games, discover exclusive content, and
          connect with a global community of fellow enthusiasts. With its
          intuitive design, responsive interface, and commitment to
          accessibility, the Disney React App ensures that every user, from avid
          fans to curious newcomers, can embark on a magical journey that's as
          unique as it is memorable.
        </p>
      </article>
    </div>
  );
}
