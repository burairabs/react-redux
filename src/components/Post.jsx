function Post({ post }) {
  return (
    <div className="w-full">
      <div className="h-full p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 -- nc-dark-box-bg">
        <div
          className="nc-CategoryBadgeList flex flex-wrap space-x-2"
          data-nc-id="CategoryBadgeList"
        >
          <a
            className="cursor-pointer  transition-colors hover:text-white duration-300 nc-Badge relative inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
            href={() => {}}
          >
            popular
          </a>
        </div>
        <h2 className="nc-card-title text-xl sm:text-2xl font-semibold ">
          <a
            className="cursor-pointer  line-clamp-2"
            title=""
            href={() => {}}
          >
            {post.title}
          </a>
        </h2>
        <a
          className="cursor-pointer nc-CardAuthor2 relative inline-flex items-center relative"
          data-nc-id="CardAuthor2"
          href={() => {}}
        >
          <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-base flex-shrink-0 mr-3">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="data:image/jpeg;base64,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"
              alt="Foulcher Nathanil"
            />
            <span className="wil-avatar__name">F</span>
          </div>
          <div>
            <h2 className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
              {post.body}
            </h2>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Post;
