import './Buttons.css';

const Buttons = () => {
  return (
        <div className="button-bar">
              <button className="button button-higher" style={{marginBottom: '0.5em'}}>Higher</button>
              <button className="button button-even" style={{marginBottom: '0.5em'}}>Even</button>
              <button className="button button-lower" style={{marginBottom: '0.5em'}}>Lower</button>
        </div>
  );
};

export default Buttons;