import store from './index'

export function getRelation(entity, relation) {
    const relStore = store.getState()[relation]

    if (!relStore || !entity[relation]) return []

    const filtered = relStore.filter((relEntity) => {
        return entity[relation].includes(relEntity.id);
    });

    return filtered;
}
