class App extends React.Component {
  state = {
    title: '',
    entry: '',
    date: '',
    journal: []
  }
  handleSubmit = event => {
  event.preventDefault()
  axios
    .post('/journal', this.state)
    .then(response =>
      this.setState({ journal: response.data, title: '', date: '', entry: '' })
    )
}
handleChange = event => {
  this.setState({ [event.target.id]: event.target.value })
}
componentDidMount = () => {
  axios.get('/journal').then(response => {
    this.setState({
      journal: response.data
    })
  })
}
deleteEntry = event => {
  axios.delete('/journal/' + event.target.value).then(response => {
    this.setState({
      journal: response.data
    })
  })
}
updateEntry = event => {
  event.preventDefault()
  const id = event.target.id
  axios.put('/journal/' + id, this.state).then(response => {
    this.setState({
      journal: response.data,
      title: '',
      entry: '',
      date: ''
    })
  })
}
  render = () => {
    return (
      <div className='vent-box'>
     <h1 className='vent'>Ventify &#128395;</h1>
      <form onSubmit={this.handleSubmit}>
      <label className='label' htmlFor="title">Title:</label>

      <input className="input is-danger"  type="text" id="title" onChange={this.handleChange} />

      <label className='label' htmlFor="date">Date:</label>

      <input className="input is-danger"  type="date" id="date" onChange={this.handleChange} />

      <label className='label' htmlFor="entry">Entry:</label>

      <textarea class="textarea is-danger"  type="text" id="entry" onChange={this.handleChange} />
      <br />
      <input className="button is-danger is-light" type="submit" value="Send Entry!" />
      </form>
      <h2 className='entries'> &#128218; Journal Entries &#128218; </h2>
      <ul>
        {this.state.journal.map((journal) => {
          return (
            <li>
            <h3>{journal.title} </h3>
            <p>{journal.date}</p>  <br />
            <br />
            <p>{journal.entry}</p>
            <button class="button is-info is-light" value={journal._id} onClick={this.deleteEntry}>
          delete entry
        </button>
        <details>
        <summary>Edit {journal.title}</summary>
        <form id={journal._id} onSubmit={this.updateEntry}>
        <br />
        <label className='label' htmlFor="title">Title:</label>

        <input className="input is-primary" type="text" id="title" onChange={this.handleChange} />

        <label className='label' htmlFor="date">Date:</label>

        <input className="input is-primary" type="date" id="date" onChange={this.handleChange} />

        <label className='label' htmlFor="entry">Entry:</label>

        <input className="input is-primary" type="text" id="entry" onChange={this.handleChange} />
        <br />
        <br />
        <input className="button is-success is-light" type="submit" value="Update Entry" />
        </form>
        </details>
            </li>
  )
})}
</ul>
      </div>

    )
  }
}






ReactDOM.render(<App></App>, document.querySelector('main'))
