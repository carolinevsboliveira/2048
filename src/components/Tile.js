import react from "react";

const Tile = ({tile}) =>{
    let classArr = ['tile'];
    classArr.push('tile'+tile.value); 
    if(!tile.mergedInto){
        classArr.push(`position_${tile.row}_${tile.column}`)
    }
    if(tile.mergedInto){
        classArr.push('merged');
    }
    if(tile.isNew()) {
        classArr.push('new');
    }

    if(tile.hasMoved()){
        classArr.push(`row_from_${tile.fromRow()}_to_${tile.toRow()}`);
        classArr.push(`row_from_${tile.fromColumn()}_to_${tile.toColumn()}`); 
        classArr.push('isMoving');
    }

    let classes = classArr.join(' ')
    return <span className={classes}></span>
}

export default Tile