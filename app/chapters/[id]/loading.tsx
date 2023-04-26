const Loading = () => {
    return(
      <div className="w-full md:w-4/5 lg:w-3/5 h-full bg-slate-50 mx-auto landscape:w-full">
      <ul className="w-5/6 h-full mx-auto list-none">
        {[...Array(20).keys()].map((i) => {
          return (
            <li className="w-full" key={i}>
              <span
                className="inline-block h-5 animate-pulse w-full bg-slate-500"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: "1s",
                }}
              ></span>
            </li>
          );
        })}
      </ul>    
      </div>
      )
}

export default Loading;