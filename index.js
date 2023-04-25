const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const response = {
    "organization": "Калужский государственный университет им. К.Э. Циолковского",
    "title": "Расписание",
    "description": "учебных занятий на 2-ой семестр 2022-2023 уч. года",
    "institute": "инженерно-технологического института",
    "data": [
      {
        "group": "Б-Арх-11",
        "monday": {
          "1": {
            "first": {
              "title": "Начертательная геометрия (Лк)",
              "period": "13.02.23 - 24.04.23, 22.05.23 - 05.06.23"
            },
            "second": {
              "title": "История искусств",
              "period": "13.02.23 - 24.04.23, 22.05.23 - 05.06.23"
            }
          },
          "2": {
            "first": {
              "title": "Экономическая культура и финансовая грамотность",
              "period": "13.02.23 - 24.04.23"
            }
          }
        },
        "tuesday": {
          "1": {
            "first": {
              "title": "Экономическая культура и финансовая грамотность (Лк)"
            }
          }
        },
        "wednesday": {
          "2": {
            "first": {
              "title": "Эмоциональный интеллект"
            }
          }
        }
      },
      {
        "group": "Б-ГиМУ-11",
        "monday": {
          "1": {
            "first": {
              "title": "Теория управления (Лк)",
              "period": "13.02.23 - 24.04.23, 22.05.23 - 05.06.23"
            },
            "second": {
              "title": "Базовые информационные технологии",
              "period": "13.02.23 - 24.04.23, 22.05.23 - 05.06.23"
            }
          },
          "2": {
            "first": {
              "title": "Экономическая культура и финансовая грамотность",
              "period": "13.02.23 - 24.04.23"
            }
          }
        },
        "tuesday": {
          "1": {
            "first": {
              "title": "Экономическая культура и финансовая грамотность (Лк)"
            }
          }
        },
        "wednesday": {
          "2": {
            "first": {
              "title": "Эмоциональный интеллект"
            }
          }
        }
      }
    ]
  };

app.get("/getCalendar", (req, res) => {
    res.json(response)
})

app.post("/getCalendar", (req, res) => {
    res.json(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
