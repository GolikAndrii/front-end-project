import Coordinates from "./Coordinates";

export default interface LocateState {
    coordinates: Coordinates,
    error?: string
}
