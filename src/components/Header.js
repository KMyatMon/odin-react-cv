import { Button } from "./Button.js";
import "../styles/Header.css";

export function Header({ onTogglePreview }) {
  return (
    <header>
      <div className="content-margin header_inner">
        <div>
          <h1>CV Creator</h1>
          <p>
            Made by{" "}
            <a href="https://github.com/KMyatMon/cv-creator-app" target="_blank" rel="noreferrer">
              KMMon.
            </a>
          </p>
        </div>
        <nav className="header_nav">
          <ul>
            <li className="header_nav-item">
              <Button
                content="Edit CV"
                onClick={() => onTogglePreview(false)}
                extraClasses="simple"
              />
            </li>
            <li className="header_nav-item">
              <Button
                content="Preview CV"
                onClick={() => onTogglePreview(true)}
                extraClasses="simple"
              />
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}
