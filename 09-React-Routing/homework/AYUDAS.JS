function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
}

