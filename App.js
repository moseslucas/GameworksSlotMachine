import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SlotMachine from 'react-native-slot-machine';
import RNShakeEvent from 'react-native-shake-event';

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    RNShakeEvent.addEventListener('shake', () => {
      this.slot.spinTo(4321);
    });
  }

  componentWillUnmount() {
    RNShakeEvent.removeEventListener('shake');
  }
	constructor(props) {
		super(props);
    this.state = {
      duration: 10000,
      slot1: 1234,
      slot2: 'hello',
      slot3: '2351'
    };
	}

	render() {
		const symbols = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌']; // can't use emojies in SlotMachine because some of them are comprised of 2 chars
		return (
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View>
          </View>
						<View style={{height: 200, justifyContent: 'space-between', alignItems: 'center'}}>
              <SlotMachine
                ref={ slot => this.slot = slot }
                height={80}
                width={80}
                text={this.state.slot3}
                range="0123450123450123450123450123450123450123"
                renderContent={c => <Text style={{fontSize: 60}}>{symbols[c]}</Text>}
                duration={this.state.duration}
                slotInterval={3000}
                styles={{
                  container: {
                    backgroundColor: '#fff'
                  },
                  slotWrapper: {
                    backgroundColor: '#fff'
                  },
                  slotInner: {
                    backgroundColor: '#fff'
                  },
                  innerBorder: {
                    borderColor: '#fff'
                  },
                }}
              />
						</View>
				</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
