import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Article, ArticleElemTypeEnum} from '../../../models/article.model';

@Component({
    selector: 'app-dbt-training-theory',
    templateUrl: './dbt-training-theory.component.html',
    styleUrls: ['./dbt-training-theory.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbtTrainingTheoryComponent implements OnInit {
    public readonly _articleModel: Article = {
        id: 'DbtTrainingTheoryComponent',
        title: 'Тренинг психосоциальных навыков, общая информация',
        blocks: [
            {
                id: 'header1',
                title: 'Что такое тренинг навыков?',
                elements: [
                    {
                        id: 'p1',
                        type: ArticleElemTypeEnum.text,
                        content: `Тренинг навыков это часть <strong>диалектико-поведенческой терапии</strong>, в оригинале Dialectical behavior
    therapy (сокращённо DBT).
    DBT - это программа, разработанная специально для лечения людей с <span class="_titlable" title="Пограничное расстройство личности"
    >ПРЛ</span>.
    Наиболее эффективной формой DBT является сочетание тренинга навыков и индивидуальной психотерапии.`,
                    },
                    {
                        id: 'p2',
                        type: ArticleElemTypeEnum.text,
                        content: `Но, несмотря на то, что изначально тренинг предназначен для людей с ПРЛ, он будет полезен практически всем.`,
                    },
                    {
                        id: 'p3',
                        type: ArticleElemTypeEnum.title,
                        content: 'Основные положения концепции DBT',
                    },
                    {
                        id: 'p4',
                        type: ArticleElemTypeEnum.ulist,
                        content: [
                            'Действительность и сам человек воспринимаются как нечто целое. Поэтому пытаясь изменить поведение, надо учитывать как непосредственно само поведение, так и контекст, в котором оно происходит.',
                            'Мир не воспринимается как нечто застывшее. Он меняется. В нём есть противоречия, и если их друг с другом совместить, получится что-то качественно новое. Считается, что проблема людей с <span class="_titlable" title="Пограничное расстройство личности">ПРЛ</span> в неумении преодолевать эти противоречия. Главное противоречие - нужно себя полностью принимать и при этом надо меняться.',
                        ],
                    },
                ],
            },
        ],
    };

    constructor() {}

    ngOnInit() {}
}
