export default function Loading () {
    return(
        <div>
        {[...Array(20).keys()].map((i) => {
          return (
            <li key={i}>
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
      </div>    
      )
}

