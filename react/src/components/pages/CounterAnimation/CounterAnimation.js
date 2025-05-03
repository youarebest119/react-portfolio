import React from 'react';
import styles from "./CounterAnimation.module.scss";
import CountUp from 'react-countup';

const CounterAnimation = () => {
	return (
		<>
			<h2 className={styles.counter}>
				<CountUp
					start={0}
					end={100}
					duration={2.75}
					enableScrollSpy
				/>%
			</h2>
		</>
	)
}

export default CounterAnimation