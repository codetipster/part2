// eslint-disable-next-line react/prop-types
const Notification = ({ message, success }) => {

    if (message === null) {
        return null;
    }

    const notifyStyleSuccess = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    };

    const notifyStyleError = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

  return (
    <div style={success ? notifyStyleSuccess : notifyStyleError}>
      {message}
    </div>
  );
}

export default Notification;