import '../styles/globals.scss'
export default function Box({ children }) {
    return (
        <div className="backdrop-blur-xl bg-white/30 rounded-md shadow shadow-neutral-400/30">
            {children}
        </div>
    );
  }
  