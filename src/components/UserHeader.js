import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/fetchPosts'

class UserHeader extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {

    this.props.users.find( (user) => user.id === this.props.userId)

    if (!user) {
      return null;
    }
    return (
      <div>UserHeader</div>
    );
  }
}


if (tipoDeSuscripcion === 'free') {
  return console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
   return console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

export default connect(null, { fetchUser })(UserHeader);