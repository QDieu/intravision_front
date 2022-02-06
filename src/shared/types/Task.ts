let lifetimeItems = {
    id: 145340,
    userName: '7944643c-9f1a-41d6-af60-8aac20b50754',
    lifetimeType: 20,
    createdAt: '2022-02-02T15:36:56.881577',
    comment: 'Заказ готов? Дайте знать когда будет готов',
    fieldName: null,
    oldFieldValue: null,
    newFieldValue: null,
};

const mockTask = {
    id: 191593,
    name: 'Заказать обед',
    description:
        '<p style="color: #e5e5e5;">Уха</p> из трех видов рыб. Салат с телятиной. МОРС КЛЮКВЕННЫЙ',
    createdAt: '2022-02-02T15:36:56.881577',
    updatedAt: '2022-02-02T15:36:56.881577',
    price: 100,
    taskTypeId: 70093,
    taskTypeName: 'Стандартный',
    statusId: 120186,
    statusName: 'Открыта',
    statusRgb: '#fd5e53',
    priorityId: 103488,
    priorityName: 'Средний',
    serviceId: 70092,
    serviceName: 'Еда > Заказ обедов',
    resolutionDatePlan: '2022-02-02T15:36:56.881577',
    initiatorId: 70094,
    initiatorName: 'Иванов Андрей',
    executorId: 70093,
    executorName: 'Петров Борис',
    executorGroupId: 70092,
    executorGroupName: 'Офис менеджеры',
};

type TTask = typeof mockTask;

export interface ITask extends Partial<TTask> {
    lifetimeItems?: Array<typeof lifetimeItems>;
    tags?: Array<{ id: number; name: string }>;
    comment?: string;
}
