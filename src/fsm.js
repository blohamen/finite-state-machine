class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        if(!config) throw new Error;
        this.config = config;
        this.currentState = config.initial;
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.currentState;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if(!(state in this.config.states)) throw new Error;
        for(var key in this.config.states){
            if(key === state){ this.currentState = key;}
        }
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {

    	for(var key in this.config.states){
		 var a = this.config.states[key].transitions;
		 for(var key2 in a){
		 	if(key2 === event) {this.currentState = a[key2]}
			}
		}		
	 }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.currentState = this.config.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
    	var b = [];
    	if(!event){
    		for(var key in this.config.states){
    			b.push(key);
    		}
    		return b;
    	}
    	if(!(event in this.config.states)) return [];
    	for(var key in this.config.states){
    		var a = this.config.states.transitions;
    		for (var key2 in a){
    			if (key2 === event){ b.push(a[key2]);}
    		}
    	}
    	return b;
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
