import React from 'react'

function Card({ username = "sakthi", post = "Not assigned yet" }) {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl overflow-hidden">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/38653316/pexels-photo-38653316.jpeg"
          alt="profile"
          width="384"
          height="512"
        />

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, blanditiis!
            </p>
          </blockquote>

          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default Card
