import React, { Component } from 'react';
import '../styles/getid.css';

export class GetDataByIdComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '', // Initialize id as an empty string
      data: null,
      isLoading: false,
      error: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ id: event.target.value });
  };

  fetchDataById = () => {
    const { id } = this.state;

    // Make a GET request to your .NET backend API with the ID as a parameter
    fetch(`https://localhost:7022/api/EnergyContractor/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include any required headers here, such as authentication tokens.
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((error) => {
        this.setState({ error, isLoading: false });
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true, data: null, error: null });
    this.fetchDataById();
  };

  render() {
    const { id, data, isLoading, error } = this.state;

    return (
      <div>
        <h2>Fetch Data by ID from .NET Backend</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter ID:
            <input type="text" value={id} onChange={this.handleInputChange} />
          </label>
          <button type="submit">Fetch Data</button>
        </form>

        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && (
          <div className = "table-container">
            <h3>Data by ID: {id}</h3>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre>  */}
            <table className = "solar-table">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((key) => {
                  // Specify the fields you want to display
                  if (key === "contractorName" || key === "amountInvested" || key === "quantityGenerated" || key === "typeOfEnergy" || key === "netEnergyGenerated") {
                    return (
                      <tr key={key}>
                        <td><b>{key}</b></td>
                        <td>{JSON.stringify(data[key])}</td>
                      </tr>
                    );
                  }
                  return null; // Skip other fields
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

//export default GetDataByIdComponent;
