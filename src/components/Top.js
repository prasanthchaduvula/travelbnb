import React from 'react';
import data from './data.json';

export default class Top extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'rajasthan',
      filterdata: []
    };
    console.log(this.state.value);
  }
  handleChange = event => {
    var a = event.target.value;
    this.setState({ value: a }, () => console.log(this.state.value));
  };
  render() {
    return (
      <>
        <div className="top">
          <h1>Explore the life till the end</h1>
          <div className="top-select">
            <select onChange={this.handleChange}>
              <option value="rajasthan">Rajasthan, Change place</option>
              {['tamilnadu', 'kerala', 'himachalpradesh', 'rajasthan'].map(
                place => (
                  <option value={place}>{place}</option>
                )
              )}
            </select>
          </div>
        </div>
        <div className="card-grid card-grid-res">
          <>
            {data[this.state.value].map(item => (
              <div className="card">
                <img className="card-img" src={item.image} alt=""></img>
                <p className="card-name">{item.name}</p>
              </div>
            ))}
          </>
        </div>
      </>
    );
  }
}
