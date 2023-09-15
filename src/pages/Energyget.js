import React, { Component } from 'react';

export class GetDataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    // Make a GET request to your .NET backend API
    fetch('https://localhost:7022/api/Energies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // You may need to include any required headers here, such as authentication tokens.
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
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h2>Data from .NET Backend</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

// export default GetDataComponent;
