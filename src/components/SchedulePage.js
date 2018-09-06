import React, { Component } from 'react';
import colors from '../styles/colors';

const styles = {
  containerDrag: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridGap: '10px',
    margin: '5%',
    height: '500px'
  },
  assigned: {
    borderStyle: 'solid',
    borderColor: 'white', 
    height: '100%',
  },
  unassigned: {
    borderStyle: 'solid',
    borderColor: 'white',
    height: '100%',
  },
  draggable: {
    margin: '5px',
    padding: '5%',
    backgroundColor: colors.lightBlack,
    border: '2px solid',
    borderColor: colors.white,
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px',
  },
  listHeader: {
    fontSize: '30px',
    width: '50%',
    margin: '10px auto',
    textAlign: 'center'
  }
};

class SchedulePage extends Component {
  constructor() {
    super();

    this.state = {
      members: [{ name: "A1C David Bowie", category: "unassigned"},
      { name: "SSgt Gary Clark Jr", category: "unassigned"},
      { name: "SrA Nathaniel Rateliff", category: "unassigned"}]
    };

    this.onDragOver = this.onDragOver.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    let members = this.state.members.filter((member) => {
      if (member.name == id) {
        member.category = cat;
      }
      return member;
    });
    this.setState({
      ...this.state,
      members
    });
  }

  render() {
    var members = {
      unassigned: [],
      assigned: []
    }

    this.state.members.forEach((t) => {
      members[t.category].push(<div
        key={t.name}
        onDragStart={(e) => this.onDragStart(e, t.name)}
        draggable
        style={styles.draggable}>
        {t.name}
      </div>);
    });

    return (
      <div>
        <div style={styles.containerDrag}>
          <div style={styles.assigned}
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => { this.onDrop(e, "assigned") }}>
            <div style={styles.listHeader}>ASSIGNED</div>
            {members.assigned}
          </div>
          <div style={styles.unassigned}
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e, "unassigned")}>
            <div style={styles.listHeader}>UNASSIGNED</div>
            {members.unassigned}
          </div>
        </div>
      </div>);
  }
}

export default SchedulePage;