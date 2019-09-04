import React, { Component }from 'react';

interface CounterProps {
    name: string;
}

interface CounterState {
    count: number;
}

class Counter extends Component<CounterProps, CounterState> {
    public state = {
        count: 0
    }

    componentDidMount() {
        setInterval(this.increase, 1000);
    }

    increase = () => {
        // const { count } = this.state;
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        const { name } = this.props;
        const { count } = this.state;

        return(
            <>
                <h1>{name} counter</h1>
                <div>count values: {count}</div>
            </>
        );
    }
}

export default Counter;