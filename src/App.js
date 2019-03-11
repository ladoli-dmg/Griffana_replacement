import React, { Component } from 'react';
import * as d3 from 'd3';
import logo from './logo.svg';
import './App.css';


const dummyData = [
  ["0", "00:6e:0d:64:65:f7", "unknown", "mine-coi1_1", "unknown", "unknown", "stratum+tcp://us-east.stratum.slushpool.com:3333", 14146760, 54], 
  ["1", "00:6e:0d:64:65:f7", "unknown", "mine-coi1_1", "unknown", "unknown", "stratum+tcp://us-east.stratum.slushpool.com:3333", 14077620, 52], 
  ["2", "00:6e:0d:64:65:f7", "unknown", "mine-coi1_1", "unknown", "unknown", "stratum+tcp://us-east.stratum.slushpool.com:3333", 14127580, 53], 
  ["3", "00:6e:0d:64:65:f7", "unknown", "mine-coi1_1", "unknown", "unknown", "stratum+tcp://us-east.stratum.slushpool.com:3333", 14094920, 53], 
  ["4", "00:6e:0d:64:65:f7", "unknown", "mine-coi1_1", "unknown", "unknown", "stratum+tcp://us-east.stratum.slushpool.com:3333", 14013380, 53], 
  ["5", "00:6e:0d:64:65:f7", "unknown", "mine-coi1_1", "unknown", "unknown", "stratum+tcp://us-east.stratum.slushpool.com:3333", 13915200, 55], 
];



// {
//   "series": [
//     {"name": "miner_status", 
//       "columns": [
//         "time", 
//         "nodename", 
//         "type", 
//         "mine-controller", 
//         "switch", 
//         "port", 
//         "url", 
//         "hashrate", 
//         "temperature"
//       ], "values": }]};

class App extends Component {


  componentDidMount(){

    const width = 800;
    const height = 800;

    let svg = d3
            .select(this._rootNode)
            .append("div")
            .style("width", "800px")
            .style("height", "800px")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

            var g = svg.append("g")
            var x = d3.scaleTime().rangeRound([0, width]);
            var y = d3.scaleLinear().rangeRound([height, 0]);

            const xInterval = width/dummyData.length;
            let xPos = 0;
            var line = d3.line()
            .x(function(d) {
              return x(d[0])
            })
            .y(function(d) { return y(d[7])})
            x.domain(d3.extent(dummyData, function(d) { return d[0] }));
            y.domain(d3.extent(dummyData, function(d) { return d[7] }));

            g.append("path")
            .datum(dummyData)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line);

  }

  _setRef = (componentNode) => {
      this._rootNode = componentNode;
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
        < div className="graph" ref={this._setRef}/>

        </header>
      </div>
    );
  }
}

export default App;
