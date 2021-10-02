import SingleDogComponent from '../components/singleDogComponent'

const DogListComponent = (props)=>{
    let allDogs = props.dogs;
    return (
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
            {allDogs.map((dog)=>{
                return <SingleDogComponent dog={dog} />;
            })}
            </div>
    )

}
export default DogListComponent