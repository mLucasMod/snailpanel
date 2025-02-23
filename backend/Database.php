<?php
class DB {
    private static ?DB $instance = null;
    private \PDO $pdo;

    private function __construct() {
        try {
            $dsn = "mysql:host=192.168.1.10;dbname=snailpanel;charset=utf8mb4";
            $username = "snailpanel";
            $password = "F1m6HoydX1GmgxEA";

            $this->pdo = new \PDO($dsn, $username, $password, [
                \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
                \PDO::ATTR_EMULATE_PREPARES => false
            ]);
        } catch (\PDOException $e) {
            die("Database connection error : " . $e->getMessage());
        }
    }

    private static function getInstance(): DB {
        if (self::$instance === null) {
            self::$instance = new DB();
        }
        return self::$instance;
    }

    private function getConnection(): \PDO {
        return $this->pdo;
    }

    public static function execute(string $sql, array $params = []): bool {
        $db = self::getInstance()->getConnection();
        $stmt = $db->prepare($sql);
        return $stmt->execute($params);
    }

    public static function fetchOne(string $sql, array $params = []): array|false {
        $db = self::getInstance()->getConnection();
        $stmt = $db->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetch();
    }

    public static function fetchAll(string $sql, array $params = []): array {
        $db = self::getInstance()->getConnection();
        $stmt = $db->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll();
    }
}
?>
